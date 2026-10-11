-- ==============================================================================
-- GENESIS: SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- Platform connecting women with verified NGOs, lawyers, & financial educators.
-- Mobile-First, Zero-PII Collection Architecture.
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUMS
CREATE TYPE user_role AS ENUM ('visitor', 'provider', 'admin');
CREATE TYPE provider_type AS ENUM ('ngo', 'lawyer', 'financial_educator');
CREATE TYPE verification_status AS ENUM ('pending', 'verified', 'suspended', 'rejected');
CREATE TYPE need_category AS ENUM ('legal_help', 'counselling', 'shelter', 'financial_training');
CREATE TYPE request_status AS ENUM ('new', 'in_progress', 'handled');

-- 2. USER PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'visitor',
  full_name TEXT,
  phone_masked TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. PROVIDER PROFILES (NGOs, Lawyers, Financial Educators)
CREATE TABLE IF NOT EXISTS public.providers (
  id UUID PRIMARY KEY, -- can reference profiles(id) or standalone UUID for sample/seed data
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  type provider_type NOT NULL,
  districts TEXT[] NOT NULL,
  languages TEXT[] NOT NULL,
  specialization TEXT NOT NULL,
  helpline TEXT NOT NULL,
  description TEXT,
  address_hint TEXT,
  status verification_status NOT NULL DEFAULT 'pending',
  is_sample BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. ANONYMOUS SERVICE REQUESTS (STRICT ZERO-PII POLICY)
-- SAFETY DIRECTIVE: NEVER store names, phone numbers, GPS coordinates, or case narratives.
-- Stores exclusively the general need category and district for providers to monitor capacity.
CREATE TABLE IF NOT EXISTS public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  need_type need_category NOT NULL,
  district TEXT NOT NULL,
  status request_status NOT NULL DEFAULT 'new',
  handled_by UUID REFERENCES public.providers(id) ON DELETE SET NULL,
  is_sample BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. USER FAVORITES (Optional for registered visitors)
CREATE TABLE IF NOT EXISTS public.user_favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider_id UUID NOT NULL REFERENCES public.providers(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, provider_id)
);

-- 6. WORKSHOPS & FINANCIAL PROGRAMS
CREATE TABLE IF NOT EXISTS public.workshops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  organizer TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('online', 'in_person')),
  district TEXT,
  registration_link TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  is_sample BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. PLAIN-LANGUAGE LEGAL & WELLBEING RIGHTS ARTICLES
CREATE TABLE IF NOT EXISTS public.rights_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  category TEXT NOT NULL,
  key_points TEXT[] NOT NULL,
  video_url TEXT,
  is_sample BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rights_articles ENABLE ROW LEVEL SECURITY;

-- HELPER: Check if active user is Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- --- PROFILES POLICIES ---
-- Users can view their own profile; admins can view all
CREATE POLICY "Users view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

-- Users can insert their profile on signup
CREATE POLICY "Users insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Users can update own profile
CREATE POLICY "Users update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id OR public.is_admin());

-- --- PROVIDERS POLICIES ---
-- 1. Public can view ONLY verified providers
CREATE POLICY "Public views verified providers"
  ON public.providers FOR SELECT
  USING (status = 'verified' OR public.is_admin() OR auth.uid() = user_id);

-- 2. Providers can self-register (always default to 'pending')
CREATE POLICY "Providers can self register"
  ON public.providers FOR INSERT
  WITH CHECK (
    auth.uid() = user_id AND status = 'pending'
  );

-- 3. Providers can edit their profile info (but cannot approve themselves)
CREATE POLICY "Providers can update own info"
  ON public.providers FOR UPDATE
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (
    -- If not admin, status cannot be upgraded to verified
    (NOT public.is_admin() AND status = 'pending') OR public.is_admin()
  );

-- --- SERVICE REQUESTS POLICIES (ANONYMOUS & CAPACITY TRACKING) ---
-- 1. ANYONE (including anonymous unauthenticated visitors) can file a need request
CREATE POLICY "Anyone can submit anonymous need"
  ON public.service_requests FOR INSERT
  WITH CHECK (true);

-- 2. Verified providers and Admins can view incoming requests
CREATE POLICY "Providers and Admins view requests"
  ON public.service_requests FOR SELECT
  USING (
    public.is_admin() OR
    EXISTS (
      SELECT 1 FROM public.providers
      WHERE user_id = auth.uid() AND status = 'verified'
    )
  );

-- 3. Providers can mark requests handled
CREATE POLICY "Providers update request status"
  ON public.service_requests FOR UPDATE
  USING (
    public.is_admin() OR
    EXISTS (
      SELECT 1 FROM public.providers
      WHERE user_id = auth.uid() AND status = 'verified'
    )
  );

-- --- USER FAVORITES POLICIES ---
CREATE POLICY "Users manage own favorites"
  ON public.user_favorites FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- --- WORKSHOPS & RIGHTS ARTICLES ---
-- Public can read all workshops and rights resources
CREATE POLICY "Public read workshops"
  ON public.workshops FOR SELECT
  USING (true);

CREATE POLICY "Public read rights"
  ON public.rights_articles FOR SELECT
  USING (true);

-- Only admins can modify resources
CREATE POLICY "Admins manage workshops"
  ON public.workshops FOR ALL
  USING (public.is_admin());

CREATE POLICY "Admins manage rights"
  ON public.rights_articles FOR ALL
  USING (public.is_admin());
