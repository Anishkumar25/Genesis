# Genesis (జెనెసిస్ / जेनेसिस)

> **A Mobile-First Web App Prototype for Women Connecting with Verified NGOs, Lawyers, and Financial Educators.**  
> Designed for community leaders running women's awareness communities on Instagram. Built with a calm dawn aesthetic, high-speed mobile responsiveness, and a strict **Zero-PII** architecture.

---

## 🌅 Vision & Theme

**Genesis** means *a new beginning*.  
The interface evokes the warmth of first light at dawn — calm, trustworthy, and dignified. It consciously avoids alarmist visuals, purple gradient clichés, or stock imagery that signals crisis. To a stranger glancing at someone's phone, Genesis looks like a daily wellbeing and personal empowerment workspace.

- **Canvas / Background:** Warm Bone / Off-White (`#FBF9F5`)
- **Text & Structure:** Deep Ink Charcoal (`#142426`)
- **Accent:** Gentle Dawn Peach / Amber (`#D97746`)
- **Badges:** Soft muted pastels (Sage Green for Verified, Soft Blue for Legal, Warm Ochre for Finance)

---

## 🛡️ Non-Negotiable Safety Architecture

1. **Persistent Quick Exit:**
   - Always visible in the top header and navigation.
   - Instantly triggers `window.location.replace("https://www.accuweather.com")`, clearing Genesis from the browser's back-button history and removing sensitive inputs from memory.
2. **Zero-PII Collection Guarantee:**
   - Visitors browse all directories, rights guides, and helplines **without creating an account**.
   - The &ldquo;Anonymous Capacity Ping&rdquo; collects **strictly two attributes**: `need_type` and `district`. No names, phone numbers, IP addresses, or case stories are ever recorded or stored.
3. **No In-App Chat:**
   - Contact happens directly through the verified partner's official helpline or mobile dialer (`tel:`), avoiding sensitive data trails on shared devices.
4. **Discreet Tab & Manifest Identity:**
   - Page title and manifest are labeled as *&ldquo;Genesis | Daily Wellbeing & Rights&rdquo;*.
5. **Role-Based Row Level Security (RLS):**
   - Provider sign-ups stay in `pending` status and are **hidden from the public directory** until an administrator approves their credentials.

---

## 📱 Mobile Polish & Engineering

Built according to `.agent/skills`:
- **`mobile-native`:** Standard 375px viewport-first, `touch-action: manipulation`, `-webkit-tap-highlight-color: transparent`, `100dvh` viewport fixes, safe-area inset padding (`env(safe-area-inset-*)`), and input font sizes set to 16px to prevent iOS auto-zoom.
- **`minimalist-ui`:** 1px solid `#ECE7E1` hairline borders, micro-whitespace, no emojis (clean SVG icons only), high typographic hierarchy.
- **`emil-design-eng` & `apple-design`:** Spring press feedback (`:active:scale-[0.98]`), bottom sheets, slide-up dialogs, zero layout shift.
- **`break-ui` Diagnostic:** Built-in dev diagnostic suite testing Telugu strings, 120-character titles, unbreakable email strings, and empty state resilience.
- **`i18n-Ready`:** Structured translations for **English**, **Telugu (తెలుగు)**, and **Hindi (हिंदी)** with a 1-tap top-bar switcher.

---

## 🗂️ Project Structure

```
Genesis/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx         # Persona switcher (Provider, Admin, Visitor)
│   │   └── signup/page.tsx        # Provider self-registration with pending notice
│   ├── api/
│   │   └── requests/route.ts      # Sanitized Zero-PII anonymous ping route
│   ├── dashboard/
│   │   ├── admin/page.tsx         # Admin verification queue (Approve/Reject/Suspend)
│   │   └── provider/page.tsx      # NGO/Lawyer portal with anonymous requests & impact counter
│   ├── finance/
│   │   └── page.tsx               # Financial independence playbooks & workshop seats
│   ├── find-help/
│   │   └── page.tsx               # Filter by Need & District, verified cards, tap-to-call
│   ├── privacy/
│   │   └── page.tsx               # Plain-language privacy promise & Quick Exit guide
│   ├── rights/
│   │   └── page.tsx               # Plain-language rights cards & video walkthrough player
│   ├── globals.css                # Mobile platform layer & token rules
│   ├── layout.tsx                 # Safe-area shell, header & bottom navigation
│   └── page.tsx                   # Dawn intro hero & 3 core pathways
├── components/
│   ├── dev/
│   │   └── break-ui-suite.tsx     # In-app stress test toggle (Clean Demo vs Worst-Case)
│   ├── layout/
│   │   ├── bottom-nav.tsx         # 48px touch targets, active state indicator
│   │   └── top-header.tsx         # Discreet logo, language picker, Quick Exit
│   ├── providers/
│   │   └── provider-card.tsx      # Verified badge, district/language tags, call modal
│   └── ui/
│       ├── badge.tsx              # Muted pastel status tags
│       ├── button.tsx             # Haptic active-scale button
│       ├── icons.tsx              # Handcrafted SVG primitives (no emojis)
│       └── quick-exit.tsx         # Location.replace immediate exit
├── lib/
│   ├── i18n/
│   │   ├── dictionary.ts          # English, Telugu, and Hindi translations
│   │   └── use-translation.tsx    # Language context hook with localStorage
│   ├── sample-data.ts             # Realistic sample dataset + stress-test dataset
│   └── supabase/
│       ├── client.ts              # Browser Supabase client with offline fallback
│       └── server.ts              # Server Supabase client
├── supabase/
│   ├── schema.sql                 # DDL, ENUMs, and Row Level Security (RLS) policies
│   └── seed.sql                   # Curated sample providers, workshops & rights
├── .env.example                   # Environment variable template
├── tailwind.config.ts             # Dawn palette theme definitions
└── package.json
```

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js 18+ (tested with Node 20 & 24)
- npm or pnpm

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
To view the mobile layout on desktop, use Chrome DevTools Device Mode (select **iPhone 13 / 375px width**).

---

## 🗄️ Supabase Setup (Optional for Live Database)

Genesis operates with 100% fidelity out-of-the-box using built-in verified sample data. If you wish to connect a live Supabase project:

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Paste and run [`supabase/schema.sql`](supabase/schema.sql) to create tables, ENUMs, and RLS policies.
4. Paste and run [`supabase/seed.sql`](supabase/seed.sql) to populate sample providers, workshops, and rights cards.
5. In your project settings, copy `Project URL` and `anon public key` into `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. (Optional) Add your Supabase environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**. Vercel will build and assign you a live, shareable URL to send to your Instagram community partner.

---

## 🧪 break-ui Stress-Testing Diagnostics

A floating diagnostic pill is available in the bottom-left corner of the `/find-help` screen:
- **Clean Demo Data:** Previews the curated sample directory.
- **Worst-Case Stress Test:** Injects adversarial data from `break-ui`:
  - 120-character bilingual Telugu organization titles (`శ్రీ విద్యా సరస్వతి...`)
  - Continuous unbreakable email strings (`aleksandra.wisniewska-kowalczyk...`)
  - Minimal 2-character names (`Jo`) and missing optional descriptions
  - 30-digit telephone strings tested for `break-all` styling
