-- ==============================================================================
-- GENESIS: SAMPLE SEED DATA
-- All entries are clearly designated with is_sample = TRUE for prototype demonstration.
-- ==============================================================================

-- 1. SEED PROVIDERS (NGOs, Lawyers, Financial Educators)
INSERT INTO public.providers (
  id, name, type, districts, languages, specialization, helpline, description, address_hint, status, is_sample
) VALUES
(
  'a1111111-1111-4111-8111-111111111111',
  'Astitva Women Empowerment Foundation (Sample)',
  'ngo',
  ARRAY['Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri'],
  ARRAY['English', 'Telugu', 'Hindi'],
  'Crisis Counselling, Safe Transit & Family Mediation',
  '+91 40 2345 6789',
  'A non-profit initiative providing psychological first-aid, safe short-stay transit facilitation, and confidential social counselling for women in distress.',
  'Banjara Hills, Road No. 12, Hyderabad',
  'verified',
  TRUE
),
(
  'a2222222-2222-4222-8222-222222222222',
  'Adv. Radhika Deshmukh & Associates (Sample)',
  'lawyer',
  ARRAY['Hyderabad', 'Rangareddy', 'Secunderabad'],
  ARRAY['English', 'Telugu'],
  'Family Law, Maintenance, Child Custody & Property Rights',
  '+91 98490 12345',
  '14 years of High Court litigation experience specializing in civil property rights, matrimonial resolution, and domestic protection orders with dignified counsel.',
  'Near High Court of Telangana, Hyderabad',
  'verified',
  TRUE
),
(
  'a3333333-3333-4333-8333-333333333333',
  'Dhanashree Financial Literacy Collective (Sample)',
  'financial_educator',
  ARRAY['Hyderabad', 'Warangal', 'Karimnagar', 'Online'],
  ARRAY['Telugu', 'English', 'Hindi'],
  'Zero-Debt Budgeting, Micro-Entrepreneurship & Safe Investments',
  '+91 40 6789 0123',
  'SEBI-registered volunteer educators helping women build independent bank accounts, understand sovereign gold bonds, and navigate micro-enterprise credit.',
  'Hitech City Knowledge Park, Hyderabad',
  'verified',
  TRUE
),
(
  'a4444444-4444-4444-8444-444444444444',
  'Prerana Community Shelter & Rehabilitation (Sample)',
  'ngo',
  ARRAY['Warangal', 'Khammam', 'Hyderabad'],
  ARRAY['Telugu', 'Hindi'],
  'Temporary Safe Haven, Vocational Sewing & Nursing Training',
  '+91 870 245 8899',
  'Safe residential sanctuary with in-house nursery care and certified livelihood skill training programs.',
  'Subedari, Hanamkonda, Warangal',
  'verified',
  TRUE
),
(
  'a5555555-5555-4555-8555-555555555555',
  'Adv. Meera Sen (Legal Aid Cell) (Sample)',
  'lawyer',
  ARRAY['Visakhapatnam', 'Vijayawada', 'Online'],
  ARRAY['English', 'Telugu', 'Hindi'],
  'Workplace Harassment (POSH), Digital Privacy & Cyber Rights',
  '+91 891 278 4411',
  'Pro-bono legal advisor for working professionals and university students facing online harassment, blackmail, or employment contract discrimination.',
  'Siripuram Junction, Visakhapatnam',
  'verified',
  TRUE
),
(
  'a6666666-6666-4666-8666-666666666666',
  'Sahaya Rural Women Alliance (Sample)',
  'ngo',
  ARRAY['Nalgonda', 'Suryapet', 'Mahbubnagar'],
  ARRAY['Telugu'],
  'Self-Help Group (SHG) Support & Rural Legal Aid',
  '+91 8682 223 344',
  'Grassroots collective aiding rural women with land title registrations, ration security, and legal camps.',
  'Clock Tower Centre, Nalgonda',
  'verified',
  TRUE
),
(
  'a7777777-7777-4777-8777-777777777777',
  'Swayam Women Legal Clinic (Sample - Pending Verification)',
  'lawyer',
  ARRAY['Hyderabad', 'Sangareddy'],
  ARRAY['Telugu', 'English'],
  'Civil Mediation & Tenancy Protection',
  '+91 40 4455 6677',
  'Newly registered independent legal cell currently undergoing bar council credential verification.',
  'Kukatpally Housing Board, Hyderabad',
  'pending',
  TRUE
);

-- 2. SEED WORKSHOPS (Financial Independence)
INSERT INTO public.workshops (
  id, title, organizer, date, mode, district, registration_link, tags, is_sample
) VALUES
(
  'w1111111-1111-4111-8111-111111111111',
  'Financial First Steps: Personal Bank Account & UPI Safety (Sample)',
  'Dhanashree Financial Literacy Collective',
  NOW() + INTERVAL '4 days',
  'online',
  'All Districts (Online Zoom)',
  '#register-workshop',
  ARRAY['Zero-fee Banking', 'UPI Fraud Prevention', 'Beginner'],
  TRUE
),
(
  'w2222222-2222-4222-8222-222222222222',
  'Building an Emergency Fund on Any Income (Sample)',
  'Genesis Financial Circle',
  NOW() + INTERVAL '9 days',
  'in_person',
  'Hyderabad (Banjara Community Centre)',
  '#register-workshop',
  ARRAY['Budgeting', 'Gold Sovereign Bonds', 'Interactive'],
  TRUE
),
(
  'w3333333-3333-4333-8333-333333333333',
  'Micro-Enterprise Loans & Mudra Yojana Guide for Women (Sample)',
  'Sahaya Rural Alliance & SIDBI Volunteers',
  NOW() + INTERVAL '14 days',
  'online',
  'All Districts (Telugu Audio + Slides)',
  '#register-workshop',
  ARRAY['Government Schemes', 'Small Business', 'Telugu Medium'],
  TRUE
);

-- 3. SEED RIGHTS ARTICLES (Plain-Language Cards + Embedded Video Placeholders)
INSERT INTO public.rights_articles (
  id, title, summary, category, key_points, video_url, is_sample
) VALUES
(
  'r1111111-1111-4111-8111-111111111111',
  'Right to Reside & Shelter: Protection of Women Act (Sample Guide)',
  'You have the legal right to stay in your shared matrimonial household or seek court-provided safe alternative residence.',
  'Domestic & Housing Rights',
  ARRAY[
    'A woman cannot be arbitrarily evicted from a shared home without due legal process.',
    'Protection Officers appointed in every district must record your report for free.',
    'Emergency interim maintenance can be requested from the Magistrate court.'
  ],
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  TRUE
),
(
  'r2222222-2222-4222-8222-222222222222',
  'Zero FIR: Filing a Police Complaint in Any District (Sample Guide)',
  'A woman can register a police complaint at ANY police station regardless of where the incident happened.',
  'Legal & Police Procedures',
  ARRAY[
    'No police station can deny registering a complaint citing lack of jurisdiction (Zero FIR).',
    'A woman has the right to be questioned only in the presence of a female police officer.',
    'A free physical copy of the FIR must be handed over to you immediately.'
  ],
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  TRUE
),
(
  'r3333333-3333-4333-8333-333333333333',
  'Digital Safety & Online Harassment Defense (Sample Guide)',
  'How to legally report online stalking, unauthorized image sharing, and cyber harassment with confidential evidence logging.',
  'Cyber Rights',
  ARRAY[
    'Do not delete messages or screenshots; export chat backups as timestamped evidence.',
    'National Cyber Crime Portal (cybercrime.gov.in) accepts anonymous reports for offensive content.',
    'Section 66E and 67 of the IT Act penalize privacy violations with strict non-bailable terms.'
  ],
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  TRUE
),
(
  'r4444444-4444-4444-8444-444444444444',
  'Equal Inheritance & Ancestral Property Rights (Sample Guide)',
  'Daughters have equal coparcenary rights in ancestral Hindu property by birth, identical to sons.',
  'Property & Finance',
  ARRAY[
    'The 2005 amendment grants daughters birthright coparcenary status.',
    'Marital status does not alter or forfeit a daughter’s share in ancestral land or home.',
    'Wills cannot dispose of coparcenary ancestral portions beyond the testator’s individual share.'
  ],
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  TRUE
);

-- 4. SEED SAMPLE ANONYMOUS REQUESTS (Strict Need + District Only)
INSERT INTO public.service_requests (
  id, need_type, district, status, is_sample, created_at
) VALUES
(
  's1111111-1111-4111-8111-111111111111',
  'counselling',
  'Hyderabad',
  'new',
  TRUE,
  NOW() - INTERVAL '3 hours'
),
(
  's2222222-2222-4222-8222-222222222222',
  'legal_help',
  'Rangareddy',
  'in_progress',
  TRUE,
  NOW() - INTERVAL '7 hours'
),
(
  's3333333-3333-4333-8333-333333333333',
  'financial_training',
  'Warangal',
  'handled',
  TRUE,
  NOW() - INTERVAL '1 day'
),
(
  's4444444-4444-4444-8444-444444444444',
  'shelter',
  'Medchal-Malkajgiri',
  'handled',
  TRUE,
  NOW() - INTERVAL '2 days'
);
