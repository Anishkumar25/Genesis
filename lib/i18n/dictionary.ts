// ==============================================================================
// GENESIS: I18N DICTIONARY
// Multi-language support for English, Telugu (తెలుగు), and Hindi (हिंदी).
// Structured for seamless mobile rendering with zero layout jitter.
// ==============================================================================

export type SupportedLanguage = 'en' | 'te' | 'hi';

export interface Translations {
  // Brand & Shell
  app_name: string;
  app_tagline: string;
  quick_exit: string;
  quick_exit_tooltip: string;
  quick_exit_subtext: string;
  sample_badge: string;
  sample_notice: string;
  offline_notice: string;

  // Nav
  nav_home: string;
  nav_find_help: string;
  nav_rights: string;
  nav_finance: string;
  nav_dashboard: string;
  nav_privacy: string;
  nav_login: string;
  nav_logout: string;

  // Home Screen
  home_hero_greeting: string;
  home_hero_title: string;
  home_hero_desc: string;
  home_path_rights_title: string;
  home_path_rights_desc: string;
  home_path_help_title: string;
  home_path_help_desc: string;
  home_path_finance_title: string;
  home_path_finance_desc: string;
  home_anonymous_notice_title: string;
  home_anonymous_notice_desc: string;
  home_emergency_title: string;
  home_emergency_desc: string;

  // Find Help Screen
  find_title: string;
  find_subtitle: string;
  filter_all_needs: string;
  filter_legal: string;
  filter_counselling: string;
  filter_shelter: string;
  filter_finance: string;
  filter_district: string;
  verified_badge: string;
  call_helpline: string;
  view_details: string;
  languages_spoken: string;
  districts_served: string;
  request_help_anonymous_btn: string;
  request_modal_title: string;
  request_modal_desc: string;
  request_submit_btn: string;
  request_success: string;
  zero_results: string;
  zero_results_desc: string;

  // Rights Screen
  rights_title: string;
  rights_subtitle: string;
  rights_videos_heading: string;
  rights_watch_video: string;
  rights_key_provisions: string;

  // Finance Screen
  finance_title: string;
  finance_subtitle: string;
  finance_workshops_heading: string;
  finance_register_btn: string;
  finance_registered_alert: string;

  // Privacy Screen
  privacy_title: string;
  privacy_intro: string;
  privacy_what_we_never_store: string;
  privacy_what_we_store: string;
  privacy_quick_exit_explained: string;

  // Roles & Dashboards
  role_visitor: string;
  role_provider: string;
  role_admin: string;
  provider_dashboard_title: string;
  provider_pending_warning: string;
  admin_dashboard_title: string;
  admin_pending_queue: string;
  admin_approve: string;
  admin_reject: string;
  admin_suspend: string;
  impact_cases_handled: string;
  impact_verified_providers: string;
}

export const DICTIONARY: Record<SupportedLanguage, Translations> = {
  en: {
    app_name: 'Genesis',
    app_tagline: 'A gentle dawn of legal clarity, safe counsel & financial freedom',
    quick_exit: 'Quick Exit',
    quick_exit_tooltip: 'Leaves immediately to weather news & clears your history',
    quick_exit_subtext: 'Tap anytime to instantly replace screen with neutral weather site',
    sample_badge: 'PROTOTYPE DEMO • SAMPLE DATA',
    sample_notice: 'This demonstration uses verified mock sample data. No real personal records are accessed or stored.',
    offline_notice: 'Connected to local high-speed prototype data.',

    nav_home: 'Home',
    nav_find_help: 'Find Help',
    nav_rights: 'Know Rights',
    nav_finance: 'Finance',
    nav_dashboard: 'Portal',
    nav_privacy: 'Privacy',
    nav_login: 'Sign In',
    nav_logout: 'Sign Out',

    home_hero_greeting: 'First light at dawn',
    home_hero_title: 'You are safe, supported, and never alone.',
    home_hero_desc: 'Genesis connects you directly with verified NGOs, empathetic lawyers, and financial mentors. No login required to browse. Zero personal data collected.',
    home_path_rights_title: 'Know Your Rights',
    home_path_rights_desc: 'Clear, plain-language guides on property inheritance, Zero FIR, domestic protection, and workplace safety.',
    home_path_help_title: 'Find Help Near You',
    home_path_help_desc: 'Search verified organizations and legal counsel by district. Direct phone numbers with no middlemen.',
    home_path_finance_title: 'Build Financial Independence',
    home_path_finance_desc: 'Practical step-by-step guidance on independent bank accounts, emergency funds, and free community workshops.',
    home_anonymous_notice_title: 'Zero Data Guarantee',
    home_anonymous_notice_desc: 'We never ask for your name, phone number, address, or story. Your browsing remains strictly on your device.',
    home_emergency_title: 'Direct National Helplines',
    home_emergency_desc: 'Free, 24/7 government emergency assistance lines accessible from any phone.',

    find_title: 'Find Verified Support',
    find_subtitle: 'Choose your district and required assistance. All listed partners are vetted for integrity and dignity.',
    filter_all_needs: 'All Needs',
    filter_legal: 'Legal Counsel',
    filter_counselling: 'Counselling',
    filter_shelter: 'Safe Transit & Shelter',
    filter_finance: 'Financial Guidance',
    filter_district: 'Select District',
    verified_badge: 'Verified Partner',
    call_helpline: 'Direct Call / Contact',
    view_details: 'View Profile',
    languages_spoken: 'Languages',
    districts_served: 'Districts Covered',
    request_help_anonymous_btn: 'Send Anonymous Capacity Request',
    request_modal_title: 'Anonymous Capacity Ping',
    request_modal_desc: 'Notify verified local providers that a woman in your district requires assistance. Only your selected need and district are logged. No names or phone numbers are ever recorded.',
    request_submit_btn: 'Submit Anonymous Ping',
    request_success: 'Anonymous notification logged. Nearby providers have been alerted of district capacity need.',
    zero_results: 'No matching providers found in this district',
    zero_results_desc: 'Try selecting "All Districts" or an alternative assistance category to view regional helplines.',

    rights_title: 'Know Your Rights',
    rights_subtitle: 'The law exists to protect your dignity and agency. Read in plain language without intimidating legal jargon.',
    rights_videos_heading: 'Video Walkthroughs (Visual Guides)',
    rights_watch_video: 'Play Plain-Language Video Summary',
    rights_key_provisions: 'Key Legal Safeguards',

    finance_title: 'Financial Independence',
    finance_subtitle: 'Economic sovereignty is the foundation of long-term freedom. Practical tools to manage, save, and grow your own money.',
    finance_workshops_heading: 'Upcoming Community Workshops',
    finance_register_btn: 'Reserve Free Seat',
    finance_registered_alert: 'Seat reserved! A neutral calendar reminder has been marked.',

    privacy_title: 'Our Plain-Language Privacy Promise',
    privacy_intro: 'Genesis was engineered with a strict principle: what is never collected cannot be stolen, breached, or uncovered.',
    privacy_what_we_never_store: 'What We NEVER Collect',
    privacy_what_we_store: 'What We DO Store',
    privacy_quick_exit_explained: 'How Quick Exit Works',

    role_visitor: 'Visitor / Community Member',
    role_provider: 'NGO / Legal / Financial Provider',
    role_admin: 'Platform Administrator',
    provider_dashboard_title: 'Provider Workspace',
    provider_pending_warning: 'Your application is currently Pending Admin Verification. Your profile remains hidden from the public directory until credentials are confirmed.',
    admin_dashboard_title: 'Admin Verification Portal',
    admin_pending_queue: 'Pending Provider Verifications',
    admin_approve: 'Approve & Verify',
    admin_reject: 'Decline',
    admin_suspend: 'Suspend Access',
    impact_cases_handled: 'Anonymous Requests Coordinated',
    impact_verified_providers: 'Verified Active Providers',
  },

  te: {
    app_name: 'జెనెసిస్ (Genesis)',
    app_tagline: 'చట్టపరమైన స్పష్టత, సురక్షిత రక్షణ మరియు ఆర్థిక స్వేచ్ఛ యొక్క నూతన ఉషోదయం',
    quick_exit: 'త్వరిత నిష్క్రమణ (Quick Exit)',
    quick_exit_tooltip: 'వెంటనే వాతావరణ సమాచార పేజీకి మారుతుంది మరియు హిస్టరీని తొలగిస్తుంది',
    quick_exit_subtext: 'ఏ క్షణంలోనైనా ఈ బటన్ నొక్కితే తటస్థ వాతావరణ పేజీ కనిపిస్తుంది',
    sample_badge: 'నమూనా డెమో • శాంపిల్ డేటా',
    sample_notice: 'ఇది అవగాహన కోసం సిద్ధం చేసిన శాంపిల్ డేటా. ఎటువంటి వ్యక్తిగత సమాచారం సేకరించబడదు.',
    offline_notice: 'స్థానిక హై-స్పీడ్ శాంపిల్ డేటాతో అనుసంధానించబడింది.',

    nav_home: 'హోమ్',
    nav_find_help: 'సహాయం',
    nav_rights: 'హక్కులు',
    nav_finance: 'ఆర్థికం',
    nav_dashboard: 'పోర్టల్',
    nav_privacy: 'గోప్యత',
    nav_login: 'లాగిన్',
    nav_logout: 'లాగౌట్',

    home_hero_greeting: 'నూతన ఉషోదయం',
    home_hero_title: 'మీరు సురక్షితంగా ఉన్నారు, ఎప్పుడూ ఒంటరిగా లేరు.',
    home_hero_desc: 'జెనెసిస్ మిమ్మల్ని ధృవీకరించబడిన ఎన్జీవోలు, న్యాయవాదులు మరియు ఆర్థిక సలహాదారులతో నేరుగా కలుపుతుంది. లాగిన్ అవసరం లేదు. ఎటువంటి వ్యక్తిగత డేటా సేకరించబడదు.',
    home_path_rights_title: 'మీ హక్కులను తెలుసుకోండి',
    home_path_rights_desc: 'ఆస్తి హక్కులు, జీరో ఎఫ్ఐఆర్ (Zero FIR), గృహ రక్షణ చట్టం మరియు ఉద్యోగ భద్రతపై సరళమైన సమాచారం.',
    home_path_help_title: 'మీ జిల్లాలో సహాయం పొందండి',
    home_path_help_desc: 'ధృవీకరించబడిన సంస్థలను మీ జిల్లా వారిగా కనుగొనండి. నేరుగా కాల్ చేయడానికి హెల్ప్‌లైన్లు అందుబాటులో ఉన్నాయి.',
    home_path_finance_title: 'ఆర్థిక స్వావలంబన సాధించండి',
    home_path_finance_desc: 'స్వతంత్ర బ్యాంక్ ఖాతా, అత్యవసర నిధి మరియు ఉచిత కమ్యూనిటీ వర్క్‌షాప్‌ల మార్గదర్శకత్వం.',
    home_anonymous_notice_title: 'పూర్తి గోప్యతా హామీ',
    home_anonymous_notice_desc: 'మీ పేరు, ఫోన్ నంబర్, చిరునామా ఎప్పుడూ అడగము. మీ బ్రౌజింగ్ మీ ఫోన్‌లో మాత్రమే సురక్షితంగా ఉంటుంది.',
    home_emergency_title: 'జాతీయ అత్యవసర హెల్ప్‌లైన్లు',
    home_emergency_desc: 'ఏ ఫోన్ నుంచైనా ఉచితంగా సంప్రదించగల 24/7 ప్రభుత్వ సహాయ వాహినులు.',

    find_title: 'ధృవీకరించబడిన మద్దతును కనుగొనండి',
    find_subtitle: 'మీ జిల్లా మరియు అవసరాన్ని ఎంచుకోండి. జాబితా చేయబడిన భాగస్వాములందరూ విశ్వసనీయంగా పరిశీలించబడ్డారు.',
    filter_all_needs: 'అన్ని అవసరాలు',
    filter_legal: 'న్యాయ సలహా',
    filter_counselling: 'కౌన్సిలింగ్',
    filter_shelter: 'సురక్షిత ఆశ్రయం',
    filter_finance: 'ఆర్థిక మార్గదర్శనం',
    filter_district: 'జిల్లాను ఎంచుకోండి',
    verified_badge: 'ధృవీకరించబడిన భాగస్వామి',
    call_helpline: 'నేరుగా కాల్ చేయండి',
    view_details: 'వివరాలు చూడండి',
    languages_spoken: 'మాట్లాడే భాషలు',
    districts_served: 'సేవలు అందించే జిల్లాలు',
    request_help_anonymous_btn: 'అనామక సహాయ అభ్యర్థన పంపండి',
    request_modal_title: 'అనామక సహాయ సూచన',
    request_modal_desc: 'మీ జిల్లాలో సహాయం అవసరమని ధృవీకరించబడిన సంస్థలకు తెలియజేయండి. మీ పేరు లేదా ఫోన్ నంబర్ నమోదు చేయబడదు.',
    request_submit_btn: 'అనామక అభ్యర్థన సమర్పించండి',
    request_success: 'మీ అనామక సూచన నమోదు చేయబడింది. సమీప సంస్థలకు సమాచారం అందింది.',
    zero_results: 'ఈ జిల్లాలో సరిపోలే సంస్థలు కనుగొనబడలేదు',
    zero_results_desc: 'దయచేసి "అన్ని జిల్లాలు" ఎంచుకోండి లేదా ప్రాంతీయ హెల్ప్‌లైన్లను చూడండి.',

    rights_title: 'మీ చట్టపరమైన హక్కులు',
    rights_subtitle: 'చట్టం మీ గౌరవాన్ని మరియు రక్షణను కాపాడటానికి ఉంది. సరళమైన భాషలో చదవండి.',
    rights_videos_heading: 'వీడియో గైడ్స్ (దృశ్య సమాచారం)',
    rights_watch_video: 'వీడియో సారాంశం చూడండి',
    rights_key_provisions: 'ముఖ్యమైన చట్టపరమైన నిబంధనలు',

    finance_title: 'ఆర్థిక స్వాతంత్ర్యం',
    finance_subtitle: 'ఆర్థిక భద్రత జీవితంలో దీర్ఘకాలిక స్వేచ్ఛకు మూలం. మీ స్వంత డబ్బును ఆదా చేయడానికి మార్గదర్శకాలు.',
    finance_workshops_heading: 'రాబోయే ఉచిత వర్క్‌షాప్‌లు',
    finance_register_btn: 'ఉచిత సీటు రిజర్వ్ చేయండి',
    finance_registered_alert: 'సీటు రిజర్వ్ చేయబడింది! మీ క్యాలెండర్‌లో గుర్తు చేయబడింది.',

    privacy_title: 'స్పష్టమైన గోప్యతా వాగ్దానం',
    privacy_intro: 'సేకరించని సమాచారాన్ని ఎవరూ దొంగిలించలేరు అనే సూత్రంతో జెనెసిస్ నిర్మించబడింది.',
    privacy_what_we_never_store: 'మేము ఎప్పుడూ సేకరించనివి',
    privacy_what_we_store: 'మేము నిల్వ చేసే సమాచారం',
    privacy_quick_exit_explained: 'త్వరిత నిష్క్రమణ ఎలా పనిచేస్తుంది',

    role_visitor: 'సందర్శకులు / మహిళా సమాజ సభ్యులు',
    role_provider: 'ఎన్జీవో / న్యాయ / ఆర్థిక భాగస్వామి',
    role_admin: 'అడ్మినిస్ట్రేటర్',
    provider_dashboard_title: 'భాగస్వామి డాష్‌బోర్డ్',
    provider_pending_warning: 'మీ ఖాతా ప్రస్తుతం అడ్మిన్ పరిశీలనలో ఉంది. ధృవీకరణ పూర్తయ్యే వరకు ప్రొఫైల్ గోప్యంగా ఉంటుంది.',
    admin_dashboard_title: 'అడ్మిన్ ధృవీకరణ పోర్టల్',
    admin_pending_queue: 'పరిశీలనలో ఉన్న సంస్థలు',
    admin_approve: 'ఆమోదించు & ధృవీకరించు',
    admin_reject: 'తిరస్కరించు',
    admin_suspend: 'సస్పెండ్ చేయి',
    impact_cases_handled: 'సమన్వయం చేసిన అభ్యర్థనలు',
    impact_verified_providers: 'ధృవీకరించబడిన సంస్థలు',
  },

  hi: {
    app_name: 'जेनेसिस (Genesis)',
    app_tagline: 'कानूनी स्पष्टता, सुरक्षित परामर्श और वित्तीय स्वतंत्रता का नया सवेरा',
    quick_exit: 'त्वरित निकास (Quick Exit)',
    quick_exit_tooltip: 'तुरंत मौसम समाचार पृष्ठ पर ले जाता है और इतिहास साफ़ करता है',
    quick_exit_subtext: 'किसी भी समय टैप करके तुरंत सामान्य मौसम पृष्ठ खोलें',
    sample_badge: 'प्रोटोटाइप डेमो • केवल नमूना डेटा',
    sample_notice: 'यह प्रदर्शन केवल सत्यापित नमूना डेटा का उपयोग करता है। कोई व्यक्तिगत रिकॉर्ड संग्रहीत नहीं है।',
    offline_notice: 'स्थानीय हाई-स्पीड नमूना डेटा से जुड़ा हुआ है।',

    nav_home: 'होम',
    nav_find_help: 'मदद पाएं',
    nav_rights: 'अधिकार',
    nav_finance: 'वित्त',
    nav_dashboard: 'पोर्टल',
    nav_privacy: 'गोपनीयता',
    nav_login: 'साइन इन',
    nav_logout: 'साइन आउट',

    home_hero_greeting: 'सुबह की पहली किरण',
    home_hero_title: 'आप सुरक्षित हैं, समर्थित हैं और कभी अकेली नहीं हैं।',
    home_hero_desc: 'जेनेसिस आपको सत्यापित एनजीओ, संवेदनशील वकीलों और वित्तीय सलाहकारों से सीधे जोड़ता है। कोई लॉगिन आवश्यक नहीं। कोई व्यक्तिगत डेटा नहीं लिया जाता।',
    home_path_rights_title: 'अपने कानूनी अधिकार जानें',
    home_path_rights_desc: 'पैतृक संपत्ति, ज़ीरो एफआईआर (Zero FIR), घरेलू संरक्षण और कार्यस्थल सुरक्षा पर सरल भाषा में मार्गदर्शिका।',
    home_path_help_title: 'अपने ज़िले में मदद खोजें',
    home_path_help_desc: 'ज़िलावार सत्यापित संगठनों को खोजें। सीधे हेल्पलाइन नंबर बिना किसी बिचौलिए के।',
    home_path_finance_title: 'वित्तीय आत्मनिर्भरता बनाएं',
    home_path_finance_desc: 'स्वतंत्र बैंक खाता, आपातकालीन निधि और निःशुल्क कार्यशालाओं पर व्यावहारिक मार्गदर्शन।',
    home_anonymous_notice_title: 'शून्य डेटा गारंटी',
    home_anonymous_notice_desc: 'हम कभी आपका नाम, फ़ोन नंबर या पता नहीं पूछते। आपका ब्राउज़िंग केवल आपके फ़ोन पर सुरक्षित रहता है।',
    home_emergency_title: 'राष्ट्रीय आपातकालीन हेल्पलाइन',
    home_emergency_desc: 'किसी भी फ़ोन से 24/7 निःशुल्क सरकारी सहायता नंबर।',

    find_title: 'सत्यापित सहायता खोजें',
    find_subtitle: 'अपना ज़िला और आवश्यकता चुनें। सभी सूचीबद्ध साझेदारों का सम्मान और विश्वसनीयता के लिए सत्यापन किया गया है।',
    filter_all_needs: 'सभी आवश्यकताएं',
    filter_legal: 'कानूनी परामर्श',
    filter_counselling: 'मानसिक परामर्श',
    filter_shelter: 'सुरक्षित आश्रय',
    filter_finance: 'वित्तीय मार्गदर्शन',
    filter_district: 'ज़िला चुनें',
    verified_badge: 'सत्यापित भागीदार',
    call_helpline: 'सीधा संपर्क / कॉल',
    view_details: 'विवरण देखें',
    languages_spoken: 'भाषाएं',
    districts_served: 'सेवा क्षेत्र',
    request_help_anonymous_btn: 'गुमनाम सहायता सूचना भेजें',
    request_modal_title: 'गुमनाम क्षमता सूचना',
    request_modal_desc: 'अपने ज़िले के सत्यापित संगठनों को सूचित करें कि किसी महिला को सहायता की आवश्यकता है। कोई नाम या नंबर दर्ज नहीं किया जाता।',
    request_submit_btn: 'गुमनाम सूचना भेजें',
    request_success: 'गुमनाम सूचना दर्ज की गई। स्थानीय संगठनों को अवगत करा दिया गया है।',
    zero_results: 'इस ज़िले में कोई संगठन नहीं मिला',
    zero_results_desc: 'कृपया "सभी ज़िले" चुनें या क्षेत्रीय हेल्पलाइन देखें।',

    rights_title: 'अपने अधिकार जानें',
    rights_subtitle: 'कानून आपकी गरिमा और स्वतंत्रता की रक्षा के लिए है। बिना कठिन कानूनी शब्दों के सरल हिंदी में पढ़ें।',
    rights_videos_heading: 'वीडियो गाइड (दृश्य विवरण)',
    rights_watch_video: 'सरल वीडियो सारांश देखें',
    rights_key_provisions: 'प्रमुख कानूनी सुरक्षा प्रावधान',

    finance_title: 'वित्तीय स्वतंत्रता',
    finance_subtitle: 'आर्थिक स्वावलंबन दीर्घकालिक स्वतंत्रता की नींव है। अपने पैसे को प्रबंधित और सुरक्षित रखने के तरीके।',
    finance_workshops_heading: 'आगामी निःशुल्क कार्यशालाएं',
    finance_register_btn: 'निःशुल्क सीट बुक करें',
    finance_registered_alert: 'सीट आरक्षित हो गई है! तटस्थ कैलेंडर रिमाइंडर चिह्नित किया गया।',

    privacy_title: 'हमारी सरल गोपनीयता प्रतिज्ञा',
    privacy_intro: 'जेनेसिस का निर्माण इस सिद्धांत पर हुआ है: जो डेटा कभी लिया ही नहीं जाता, वह कभी लीक नहीं हो सकता।',
    privacy_what_we_never_store: 'हम कभी क्या संग्रह नहीं करते',
    privacy_what_we_store: 'हम क्या सुरक्षित रखते हैं',
    privacy_quick_exit_explained: 'त्वरित निकास कैसे काम करता है',

    role_visitor: 'आगंतुक / समुदाय सदस्य',
    role_provider: 'एनजीओ / कानूनी / वित्तीय भागीदार',
    role_admin: 'प्लेटफ़ॉर्म एडमिन',
    provider_dashboard_title: 'प्रदाता कार्यक्षेत्र',
    provider_pending_warning: 'आपका खाता वर्तमान में एडमिन सत्यापन के अधीन है। सत्यापन पूरा होने तक प्रोफ़ाइल सार्वजनिक नहीं होगी।',
    admin_dashboard_title: 'एडमिन सत्यापन पोर्टल',
    admin_pending_queue: 'सत्यापन के लिए प्रतीक्षारत प्रदाता',
    admin_approve: 'स्वीकृत और सत्यापित करें',
    admin_reject: 'अस्वीकार करें',
    admin_suspend: 'निलंबित करें',
    impact_cases_handled: 'समन्वित गुमनाम अनुरोध',
    impact_verified_providers: 'सत्यापित सक्रिय प्रदाता',
  },
};
