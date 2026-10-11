// ==============================================================================
// GENESIS: SAMPLE DATA REPOSITORY
// Strictly sample data labeled for prototype demonstration to community partners.
// ==============================================================================

export interface Provider {
  id: string;
  name: string;
  type: 'ngo' | 'lawyer' | 'financial_educator';
  districts: string[];
  languages: string[];
  specialization: string;
  helpline: string;
  description: string;
  address_hint: string;
  status: 'verified' | 'pending' | 'suspended' | 'rejected';
  is_sample: boolean;
  years_active?: number;
  rating_sample?: string;
}

export interface Workshop {
  id: string;
  title: string;
  organizer: string;
  date: string;
  formatted_date: string;
  mode: 'online' | 'in_person';
  district: string;
  registration_link: string;
  tags: string[];
  is_sample: boolean;
}

export interface RightsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  key_points: string[];
  video_url: string;
  video_title: string;
  is_sample: boolean;
}

export interface AnonymousRequest {
  id: string;
  need_type: 'legal_help' | 'counselling' | 'shelter' | 'financial_training';
  district: string;
  status: 'new' | 'in_progress' | 'handled';
  timestamp: string;
  is_sample: boolean;
}

export const DISTRICTS = [
  'All Districts',
  'Hyderabad',
  'Rangareddy',
  'Medchal-Malkajgiri',
  'Warangal',
  'Khammam',
  'Nalgonda',
  'Karimnagar',
  'Visakhapatnam',
  'Vijayawada',
];

export const NEED_CATEGORIES = [
  { id: 'all', labelKey: 'need_all', label: 'All Needs' },
  { id: 'legal_help', labelKey: 'need_legal', label: 'Legal Counsel' },
  { id: 'counselling', labelKey: 'need_counselling', label: 'Psychological Counselling' },
  { id: 'shelter', labelKey: 'need_shelter', label: 'Emergency Transit Shelter' },
  { id: 'financial_training', labelKey: 'need_finance', label: 'Financial Independence' },
] as const;

export const INITIAL_PROVIDERS: Provider[] = [
  {
    id: 'prov-01',
    name: 'Astitva Women Empowerment Foundation (Sample)',
    type: 'ngo',
    districts: ['Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri'],
    languages: ['English', 'Telugu', 'Hindi'],
    specialization: 'Crisis Counselling, Safe Transit & Family Mediation',
    helpline: '+91 40 2345 6789',
    description: 'A verified civil society organization providing psychological first-aid, safe short-stay transit facilitation, and confidential social counselling for women.',
    address_hint: 'Banjara Hills, Road No. 12, Hyderabad',
    status: 'verified',
    is_sample: true,
    years_active: 8,
  },
  {
    id: 'prov-02',
    name: 'Adv. Radhika Deshmukh & Associates (Sample)',
    type: 'lawyer',
    districts: ['Hyderabad', 'Rangareddy', 'Secunderabad'],
    languages: ['English', 'Telugu'],
    specialization: 'Family Law, Maintenance, Child Custody & Property Rights',
    helpline: '+91 98490 12345',
    description: '14 years of High Court litigation experience specializing in civil property rights, matrimonial resolution, and domestic protection orders with dignified counsel.',
    address_hint: 'Near High Court of Telangana, Hyderabad',
    status: 'verified',
    is_sample: true,
    years_active: 14,
  },
  {
    id: 'prov-03',
    name: 'Dhanashree Financial Literacy Collective (Sample)',
    type: 'financial_educator',
    districts: ['Hyderabad', 'Warangal', 'Karimnagar'],
    languages: ['Telugu', 'English', 'Hindi'],
    specialization: 'Zero-Debt Budgeting, Micro-Entrepreneurship & Safe Investments',
    helpline: '+91 40 6789 0123',
    description: 'SEBI-registered volunteer educators helping women build independent bank accounts, understand sovereign gold bonds, and navigate micro-enterprise credit.',
    address_hint: 'Hitech City Knowledge Park, Hyderabad',
    status: 'verified',
    is_sample: true,
    years_active: 6,
  },
  {
    id: 'prov-04',
    name: 'Prerana Community Shelter & Rehabilitation (Sample)',
    type: 'ngo',
    districts: ['Warangal', 'Khammam', 'Hyderabad'],
    languages: ['Telugu', 'Hindi'],
    specialization: 'Temporary Safe Haven, Vocational Sewing & Nursing Training',
    helpline: '+91 870 245 8899',
    description: 'Safe residential sanctuary with in-house nursery care and certified livelihood skill training programs.',
    address_hint: 'Subedari, Hanamkonda, Warangal',
    status: 'verified',
    is_sample: true,
    years_active: 11,
  },
  {
    id: 'prov-05',
    name: 'Adv. Meera Sen (Legal Aid Cell) (Sample)',
    type: 'lawyer',
    districts: ['Visakhapatnam', 'Vijayawada', 'Hyderabad'],
    languages: ['English', 'Telugu', 'Hindi'],
    specialization: 'Workplace Harassment (POSH), Digital Privacy & Cyber Rights',
    helpline: '+91 891 278 4411',
    description: 'Pro-bono legal advisor for working professionals and university students facing online harassment, blackmail, or employment contract discrimination.',
    address_hint: 'Siripuram Junction, Visakhapatnam',
    status: 'verified',
    is_sample: true,
    years_active: 9,
  },
  {
    id: 'prov-06',
    name: 'Sahaya Rural Women Alliance (Sample)',
    type: 'ngo',
    districts: ['Nalgonda', 'Suryapet', 'Mahbubnagar'],
    languages: ['Telugu'],
    specialization: 'Self-Help Group (SHG) Support & Rural Legal Aid',
    helpline: '+91 8682 223 344',
    description: 'Grassroots collective aiding rural women with land title registrations, ration security, and legal camps.',
    address_hint: 'Clock Tower Centre, Nalgonda',
    status: 'verified',
    is_sample: true,
    years_active: 12,
  },
  {
    id: 'prov-07',
    name: 'Swayam Women Legal Clinic (Sample - Pending Review)',
    type: 'lawyer',
    districts: ['Hyderabad', 'Sangareddy'],
    languages: ['Telugu', 'English'],
    specialization: 'Civil Mediation & Tenancy Protection',
    helpline: '+91 40 4455 6677',
    description: 'Newly registered independent legal cell undergoing state bar council and identity credential verification.',
    address_hint: 'Kukatpally Housing Board, Hyderabad',
    status: 'pending',
    is_sample: true,
    years_active: 2,
  },
];

export const INITIAL_WORKSHOPS: Workshop[] = [
  {
    id: 'wk-01',
    title: 'Financial First Steps: Personal Bank Account & UPI Safety (Sample)',
    organizer: 'Dhanashree Financial Literacy Collective',
    date: '2026-10-18T10:00:00Z',
    formatted_date: 'Saturday, Oct 18 • 10:00 AM IST',
    mode: 'online',
    district: 'All Districts (Zoom)',
    registration_link: '#',
    tags: ['Zero-fee Banking', 'UPI Fraud Prevention', 'Free Workshop'],
    is_sample: true,
  },
  {
    id: 'wk-02',
    title: 'Building an Emergency Fund on Any Income (Sample)',
    organizer: 'Genesis Financial Circle',
    date: '2026-10-24T14:30:00Z',
    formatted_date: 'Friday, Oct 24 • 02:30 PM IST',
    mode: 'in_person',
    district: 'Hyderabad (Banjara Community Centre)',
    registration_link: '#',
    tags: ['Budgeting', 'Gold Sovereign Bonds', 'Interactive'],
    is_sample: true,
  },
  {
    id: 'wk-03',
    title: 'Micro-Enterprise Loans & Mudra Yojana Guide for Women (Sample)',
    organizer: 'Sahaya Rural Alliance & SIDBI Volunteers',
    date: '2026-11-02T11:00:00Z',
    formatted_date: 'Sunday, Nov 02 • 11:00 AM IST',
    mode: 'online',
    district: 'All Districts (Telugu + English)',
    registration_link: '#',
    tags: ['Government Schemes', 'Small Business', 'Telugu Medium'],
    is_sample: true,
  },
];

export const INITIAL_RIGHTS: RightsArticle[] = [
  {
    id: 'rt-01',
    title: 'Right to Reside & Shelter: Protection of Women Act (Sample Guide)',
    summary: 'You have the legal right to stay in your shared matrimonial household or seek court-provided safe alternative residence without eviction.',
    category: 'Domestic & Housing Rights',
    key_points: [
      'A woman cannot be arbitrarily evicted from a shared home without due legal process.',
      'Protection Officers appointed in every district must record your report for free.',
      'Emergency interim maintenance can be requested from the Magistrate court.',
      'Free legal aid (NALSA/SLSA) is a constitutional right available in every district court.'
    ],
    video_url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    video_title: 'Understanding Protection Orders & Safe Residence Rights',
    is_sample: true,
  },
  {
    id: 'rt-02',
    title: 'Zero FIR: Filing a Police Complaint in Any District (Sample Guide)',
    summary: 'A woman can register a police complaint at ANY police station regardless of where the incident happened or whose jurisdiction it falls under.',
    category: 'Legal & Police Procedures',
    key_points: [
      'No police station can deny registering a complaint citing lack of jurisdiction (Zero FIR).',
      'A woman has the right to be questioned only in the presence of a female police officer.',
      'A free physical copy of the FIR must be handed over to you immediately upon registration.',
      'Statements can be given at your place of residence if desired.'
    ],
    video_url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    video_title: 'Step-by-Step Procedure for Filing a Zero FIR',
    is_sample: true,
  },
  {
    id: 'rt-03',
    title: 'Digital Safety & Online Harassment Defense (Sample Guide)',
    summary: 'How to legally report online stalking, unauthorized image sharing, and cyber harassment with confidential evidence logging.',
    category: 'Cyber Rights',
    key_points: [
      'Do not delete messages or screenshots; export chat backups as timestamped evidence.',
      'National Cyber Crime Portal (cybercrime.gov.in) accepts anonymous reports for offensive content.',
      'Section 66E and 67 of the IT Act penalize privacy violations with strict non-bailable terms.',
      'Social media platforms must acknowledge and act on takedown requests within 24 hours under Indian IT Rules.'
    ],
    video_url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    video_title: 'Safeguarding Digital Identity & Legal Removal Steps',
    is_sample: true,
  },
  {
    id: 'rt-04',
    title: 'Equal Inheritance & Ancestral Property Rights (Sample Guide)',
    summary: 'Daughters have equal coparcenary rights in ancestral property by birth, identical to sons, regardless of marital status.',
    category: 'Property & Finance',
    key_points: [
      'The 2005 amendment grants daughters birthright coparcenary status in ancestral property.',
      'Marital status does not alter or forfeit a daughter’s share in ancestral land or home.',
      'Wills cannot dispose of coparcenary ancestral portions beyond the testator’s individual share.',
      'Right to demand partition of ancestral property is legally enforceable.'
    ],
    video_url: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    video_title: 'Navigating Property Inheritance Laws in India',
    is_sample: true,
  },
];

export const INITIAL_REQUESTS: AnonymousRequest[] = [
  {
    id: 'req-101',
    need_type: 'counselling',
    district: 'Hyderabad',
    status: 'new',
    timestamp: '15 mins ago',
    is_sample: true,
  },
  {
    id: 'req-102',
    need_type: 'legal_help',
    district: 'Rangareddy',
    status: 'in_progress',
    timestamp: '2 hours ago',
    is_sample: true,
  },
  {
    id: 'req-103',
    need_type: 'financial_training',
    district: 'Warangal',
    status: 'handled',
    timestamp: 'Yesterday',
    is_sample: true,
  },
  {
    id: 'req-104',
    need_type: 'shelter',
    district: 'Medchal-Malkajgiri',
    status: 'handled',
    timestamp: '2 days ago',
    is_sample: true,
  },
];

// WORST-CASE STRESS-TEST DATASET FOR break-ui
// Implements the catalog from break-ui:
// - Longest realistic multi-line non-Latin strings
// - Telugu characters with heavy vertical ascenders/descenders
// - Unbreakable long email / phone strings
// - Extreme counts (1 item vs 0 items vs 1,489 items)
// - Boundary lengths
export const WORST_CASE_PROVIDERS: Provider[] = [
  {
    id: 'prov-stress-01',
    name: 'శ్రీ విద్యా సరస్వతి మహిళా సాధికారత మరియు న్యాయ సహాయ వేదిక (సంయుక్త జిల్లా స్వచ్ఛంద సేవా ట్రస్ట్) - Worst Case Sample',
    type: 'ngo',
    districts: ['రంగారెడ్డి - చేవెళ్ల డివిజన్ గ్రామీణ మండల పరిధి', 'మేడ్చల్-మల్కాజిగిరి', 'వికారాబాద్'],
    languages: ['తెలుగు (గ్రామీణ మాండలికం)', 'హిందీ', 'ఇంగ్లీష్', 'ఒడియా'],
    specialization: 'అత్యవసర రక్షణ ఆశ్రయం, కౌన్సిలింగ్, ఉచిత న్యాయ సలహా మరియు ఆర్థిక సాధికారత శిక్షణ కేంద్రం',
    helpline: '+91987654321098765432109876543210',
    description: 'ఈ సంస్థ గ్రామీణ మరియు పట్టణ మహిళలకు ఎటువంటి ఖర్చు లేకుండా సంపూర్ణ మద్దతును అందిస్తుంది. అత్యంత సుదీర్ఘమైన వివరణ కార్డు డిజైన్ మరియు బాక్స్ బౌండరీలను సరిగ్గా పరీక్షిస్తుంది.',
    address_hint: 'ప్లాట్ నెం. 894/బి, గ్రామీణ పంచాయితీ భవనం పక్కన, మెయిన్ రోడ్డు, షాబాద్, రంగారెడ్డి జిల్లా, తెలంగాణ - 501503',
    status: 'verified',
    is_sample: true,
    years_active: 28,
  },
  {
    id: 'prov-stress-02',
    name: 'Dr. Aleksandra Wiśniewska-Kowalczyk-Venkataramanan & Partners International Legal Counsel',
    type: 'lawyer',
    districts: ['Hyderabad'],
    languages: ['English'],
    specialization: 'Corporate-Cross-Border-Matrimonial-Insolvency-Jurisdiction-Litigation',
    helpline: '+91 00000 00000',
    description: 'Extremely long single unbroken email string: aleksandra.wisniewska-kowalczyk-venkataramanan@genesis-legal-defense-super-collective-foundation.org',
    address_hint: 'Room 409B, Tower 18, Global Mega Financial Technology Boulevard, Gachibowli, Hyderabad',
    status: 'pending',
    is_sample: true,
    years_active: 1,
  },
  {
    id: 'prov-stress-03',
    name: 'Jo',
    type: 'financial_educator',
    districts: ['Warangal'],
    languages: ['Telugu'],
    specialization: 'UPI',
    helpline: '1091',
    description: '',
    address_hint: '',
    status: 'suspended',
    is_sample: true,
    years_active: 0,
  },
];
