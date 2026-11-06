/**
 * Central portfolio data for Harinivas B.
 * Every fact on the site is verified from primary sources (resume, certificates, source repos).
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Harinivas B',
  displayName: 'Harinivas B',
  firstName: 'HARINIVAS',
  seriesTag: 'THE SERIES',
  originalLabel: 'A HARINIVAS ORIGINAL',
  role: 'ECE Student | Aspiring Analog IC / VLSI Engineer | Student Entrepreneur',
  tagline: ['ECE Student', 'Aspiring Analog IC / VLSI Engineer', 'Student Entrepreneur'],
  intro:
    'I am a second-year ECE student interested in analog IC design, VLSI and building technology-driven products.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'harinivas2301@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harinivas23b',
    github: 'https://github.com/harinivas-b',
  },
  resumePdf: '/assets/resume.pdf',
  portrait: {
    src: '/assets/profile.jpg',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Harinivas B',
  },
  interests: [
    'Analog IC Design',
    'VLSI Fundamentals',
    'KiCad & PCB Design',
    'Semiconductor Devices',
    'AI Products',
    'Student Entrepreneurship',
  ],
};

export const education = [
  {
    school: 'Sri Eshwar College of Engineering',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'Bachelor of Engineering — Electronics and Communication Engineering',
    period: '2025 – 2029 (Expected)',
    score: '8.2 CGPA',
  },
  {
    school: 'Bharathiya Vidya Bhavan',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'Higher Secondary (Class XII) — Math, Physics, Chemistry, CS',
    period: '2024 – 2025',
    score: '71.16% (Topper in Mathematics)',
  },
  {
    school: 'Bharathiya Vidya Bhavan',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'Secondary School (Class X)',
    period: '2022 – 2023',
    score: '84.6% (Topper in Math & Science)',
  },
];

export const experience = [
  {
    company: 'Google Gemini',
    role: 'Google Gemini Student Ambassador',
    place: 'Sri Eshwar College of Engineering',
    period: 'Semester 2',
    points: [
      'Appointed as official campus ambassador for Google Gemini, promoting AI adoption and developer tools.',
      'Organized and facilitated peer workshops demonstrating multimodal AI integration in software workflows.',
      'Actively represented campus student technical initiatives in AI and applied engineering.',
    ],
  },
  {
    company: 'Sri Eshwar College of Engineering',
    role: 'Student Entrepreneur & Prototyper',
    place: 'Coimbatore, India',
    period: '2025 – Present',
    points: [
      'Pitched FixTour AI, advancing as a seed funding finalist for SECE Seed Fund 2026.',
      'Engineered custom dual-layer PCB for interactive STEM educational hardware using KiCad.',
      'Spearheaded hackathon teams, winning Second Place at PYHACKFEST 2026 for machine-learning systems.',
    ],
  },
  {
    company: 'Toastmasters International',
    role: 'International Relations Representative',
    place: 'Coimbatore',
    period: 'Oct 2025 – Mar 2025',
    points: [
      'Served as International Relations lead, coordinating cross-club communications and event scheduling.',
      'Recognized as Best Role Player for structured public speaking, leadership, and debate evaluation.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'stem-toy',
    title: 'Interactive Sound STEM Toy',
    year: '2026',
    genre: 'Hardware • PCB',
    logline: 'Custom PCB designed in KiCad featuring a touch-activated sound generation analog circuit.',
    stack: ['KiCad', 'Analog Electronics', 'PCB Design', 'Circuit Theory'],
    build: [
      'Designed custom schematics and dual-layer PCB layout using KiCad for hands-on electronics learning.',
      'Implemented touch-activated oscillator circuit that generates sound when both contact points are touched.',
      'Optimized component placement and routing for compact form-factor and reliable audio output.',
    ],
    features: [
      'Custom dual-layer KiCad PCB layout',
      'Touch-activated trigger pads',
      'Astable analog oscillator audio circuit',
      'Hands-on educational hardware prototype',
    ],
    metrics: [{ value: 'Custom PCB', label: 'KiCad Dual-Layer' }],
    github: 'https://github.com/harinivas-b/STEM-TOY-USING-KICAD',
    palette: { from: '#1a1005', via: '#733e08', to: '#0a0805', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'future-architect',
    title: 'Future Me AI — Life Simulator',
    year: '2026',
    genre: 'AI • Full-Stack',
    logline: 'AI-driven life simulator generating personalized career trajectories, 2040 newspaper headlines, and mentor advice.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide React'],
    build: [
      'Engineered an interactive simulation engine mapping user goals and skills into progressive milestone timelines.',
      'Built a dynamic 2040 newspaper generator and a 3-specialist Mentor Council advisory interface.',
      'Crafted cinematic trailer panel that narratively outlines user aspirations and milestone pathways.',
    ],
    features: [
      'Vertical milestone timeline visualization',
      '2040 Future newspaper generator',
      'Mentor Council advisory interface (3 mentors)',
      'Cinematic trailer narration & profile validation',
    ],
    metrics: [{ value: '3 Mentors', label: 'Council System' }],
    github: 'https://github.com/harinivas-b/Future-architect',
    palette: { from: '#0c0721', via: '#38166d', to: '#070512', accent: '#a78bfa' },
    motif: 'shield',
  },
  {
    id: 'pyhackfest',
    title: 'AI Commerce Recommender',
    year: '2026',
    genre: 'ML • Web',
    logline: 'Hybrid recommendation engine utilizing collaborative and content-based filtering on purchase patterns.',
    stack: ['Python', 'scikit-learn', 'Flask', 'Machine Learning'],
    build: [
      'Developed for PYHACKFEST 2026, winning Second Place out of collegiate engineering teams.',
      'Implemented hybrid recommendation algorithms combining user browsing behavior with purchase history.',
      'Built automated order notification and email verification pipelines for seamless commerce flow.',
    ],
    features: [
      'Collaborative & content-based filtering',
      'Behavior-driven item recommendations',
      'Automated email notifications',
      'Order status tracking',
    ],
    metrics: [{ value: '2nd Place', label: 'PYHACKFEST 2026' }],
    github: 'https://github.com/harinivas-b/PYHACKFEST_2026',
    palette: { from: '#24060d', via: '#7a0e23', to: '#09060b', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'fixtour',
    title: 'FixTour AI',
    year: '2026',
    genre: 'SaaS • AI',
    logline: 'Sustainable tourism and verified route optimization platform with local operator onboarding.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
    build: [
      'Developed to solve fragmented eco-tourism booking and verified local guide discovery.',
      'Advanced as a finalist in the Sri Eshwar College of Engineering Seed Fund Pitch 2026.',
      'Engineered operator dashboard, route verification, and carbon-conscious travel planning.',
    ],
    features: [
      'Eco-friendly route planning & carbon estimation',
      'Local vendor onboarding & verification',
      'Interactive itinerary booking and tracker',
      'SECE Seed Fund Pitch Finalist',
    ],
    metrics: [{ value: 'Finalist', label: 'SECE Seed Fund' }],
    palette: { from: '#041610', via: '#0c523b', to: '#050a08', accent: '#34d399' },
    motif: 'flow',
  },
  {
    id: 'ble-tracking',
    title: 'BLE Smart Room & Asset Tracker',
    year: '2024',
    genre: 'IoT • Embedded',
    logline: 'Indoor positioning and navigation system assisting visually challenged students and tracking high-value assets.',
    stack: ['Embedded C', 'BLE Beacons', 'Microcontrollers', 'IoT'],
    build: [
      'Prototyped BLE beacon receiver modules deployed across institutional corridors.',
      'Provided audio-guided navigation cues for visually challenged individuals navigating rooms.',
      'Enabled real-time presence detection and high-value asset tracking.',
    ],
    features: [
      'BLE RSSI-based proximity calculation',
      'Assistive audio navigation cues',
      'Multi-room asset presence monitoring',
    ],
    metrics: [{ value: 'BLE', label: 'Beacon Proximity' }],
    github: 'https://github.com/harinivas-b/Assert-Tracking-and-Smart-Navigation',
    palette: { from: '#061324', via: '#104975', to: '#050a12', accent: '#38bdf8' },
    motif: 'tenants',
  },
  {
    id: 'bishop',
    title: 'BISHOP — Local Food Platform',
    year: '2026',
    genre: 'Web • Commerce',
    logline: 'Hyperlocal food discovery platform within 10km radius with digital menus and shopkeeper analytics.',
    stack: ['React', 'Next.js', 'Node.js', 'REST API'],
    build: [
      'Connected neighborhood food stalls and eateries with nearby students and customers within 10km radius.',
      'Integrated digital menus, real-time item availability status, and pre-ordering queues.',
      'Built a dedicated shopkeeper operations dashboard for inventory, digital billing, and sales analytics.',
    ],
    features: [
      '10km radius proximity search',
      'Real-time availability status',
      'Pre-ordering & digital menus',
      'Merchant inventory dashboard',
    ],
    metrics: [{ value: '10 km', label: 'Local Radius' }],
    palette: { from: '#1a0c1f', via: '#5c1b75', to: '#0b060e', accent: '#c084fc' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'pyhack',
    title: 'Second Place',
    org: 'PYHACKFEST 2026',
    detail: 'Won 2nd place out of collegiate engineering teams for an AI-powered e-commerce recommendation system.',
    laurel: 'Second Place',
  },
  {
    id: 'canva',
    title: 'First Prize',
    org: 'Canva Design Contest',
    detail: 'Awarded First Prize for exceptional visual communication, graphic composition, and design execution.',
    laurel: 'First Prize',
  },
  {
    id: 'nptel',
    title: 'Elite + Topper',
    org: 'NPTEL — IIT Madras',
    detail: 'Scored 94% in The Joy of Computing using Python, placing in the Top 5% of 21,919 learners nationwide.',
    laurel: 'Top 5%',
  },
  {
    id: 'gemini',
    title: 'Student Ambassador',
    org: 'Google Gemini',
    detail: 'Selected as Google Gemini Student Ambassador at Sri Eshwar College of Engineering to lead AI initiatives.',
    laurel: 'Ambassador',
  },
  {
    id: 'toastmasters',
    title: 'Best Role Player',
    org: 'Toastmasters International',
    detail: 'Recognized for public speaking excellence, structured evaluations, and International Relations leadership.',
    laurel: 'Best Speaker',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'The Joy of Computing using Python — TOPPER (94%, Top 5%)' },
  { issuer: 'IIT Bombay', name: 'Certification for the Completion of C Training' },
  { issuer: 'Infosys Springboard', name: 'C Programming 101' },
  { issuer: 'Infosys Springboard', name: 'C Programming Course' },
  { issuer: 'Infosys Springboard', name: 'Project in C: Employee Management System' },
  { issuer: 'ETALVIS', name: '8085 Microprocessor Foundation' },
  { issuer: 'ETALVIS', name: 'ARM Foundation' },
  { issuer: 'ETALVIS', name: 'Microprocessor Internals' },
  { issuer: 'ETALVIS', name: 'Embedded Software Foundation Controllers' },
  { issuer: 'ETALVIS', name: 'Embedded Software Foundation Course GPIO' },
  { issuer: 'ScholarHat', name: 'Java Programming Course For Beginners' },
  { issuer: 'Cmsiclass', name: 'Java Level 1' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'electronics',
    title: 'Electronics & Hardware',
    subtitle: 'Core Engineering',
    skills: [
      { name: 'Analog Electronics', mono: 'Ae' },
      { name: 'Circuit Theory', mono: 'Ct' },
      { name: 'Semiconductor Devices', mono: 'Sd' },
      { name: 'PCB Design', mono: 'Pb' },
      { name: 'KiCad', mono: 'Kc' },
      { name: 'LTspice', mono: 'Lt' },
      { name: 'Verilog / SystemVerilog', mono: 'Vg' },
      { name: '8085 / ARM', mono: 'Mp' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core Code',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Systems',
    subtitle: 'Development',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML / CSS', mono: 'Ht' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vt' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'professional',
    title: 'Focus & Leadership',
    subtitle: 'Domain & Soft Skills',
    skills: [
      { name: 'Analog IC Design', mono: 'Ic' },
      { name: 'VLSI Fundamentals', mono: 'Vl' },
      { name: 'Product Prototyping', mono: 'Pp' },
      { name: 'Student Entrepreneurship', mono: 'En' },
      { name: 'Public Speaking', mono: 'Ps' },
      { name: 'Team Leadership', mono: 'Tl' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Analog Electronics': ['Curricular focus at SECE', 'STEM Toy Touch Oscillator circuit'],
  'KiCad': ['Interactive Sound-Generating STEM Toy PCB design'],
  'C': ['IIT Bombay Certified', 'Infosys Springboard 101 & Course', 'Employee Management System'],
  'Python': ['NPTEL Elite + Topper (94%)', 'PYHACKFEST 2026 AI Commerce Recommender'],
  'React': ['Future Me AI Life Simulator', 'FixTour AI', 'Portfolio Website'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2025',
    synopsis: 'Academic excellence at Bharathiya Vidya Bhavan, mathematics topper, and first steps into computer systems and C programming.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Analytical Rigor',
        description: 'Topper in Mathematics and Science at Bharathiya Vidya Bhavan, building the quantitative discipline for engineering.',
        tags: ['Math Topper', 'Science'],
        runtime: '2022–2025',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Programming Foundations',
        description: 'Completed C training with IIT Bombay and Infosys Springboard, developing systematic algorithm design.',
        tags: ['C Programming', 'IIT Bombay'],
        runtime: '2024–2025',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'Python Mastery & NPTEL Topper',
        description: 'Scored 94% (Top 5% of 21,919 candidates) in NPTEL Joy of Computing using Python.',
        tags: ['Python', 'NPTEL Topper'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Hardware Meets Software',
    period: '2025 – Present',
    synopsis: 'B.E. in Electronics & Communication at Sri Eshwar College of Engineering. Designing PCBs in KiCad, exploring Analog IC design, and launching AI products.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Analog IC & KiCad PCB',
        description: 'Designed custom dual-layer PCB for interactive sound-generating STEM toy; studying semiconductor devices and analog circuits.',
        tags: ['Analog IC', 'KiCad', 'PCB'],
        runtime: 'Ongoing',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'PYHACKFEST 2nd Place',
        description: 'Won Second Place at PYHACKFEST 2026 with an AI e-commerce recommender using hybrid collaborative filtering.',
        tags: ['Machine Learning', 'Hackathon'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'Future Me & Seed Fund Pitch',
        description: 'Built Future Me AI life simulator and advanced as an SECE Seed Fund finalist with FixTour AI.',
        tags: ['AI Products', 'Seed Fund'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Hackathon Win', title: 'PYHACKFEST 2026', detail: 'Second Place · AI Recommender', palette: crimson },
  { label: 'Hardware Original', title: 'KiCad STEM Toy', detail: 'Custom PCB & Touch Audio', palette: amber },
  { label: 'Academic Honor', title: 'NPTEL Topper', detail: '94% Score · Top 5% Nationally', palette: jade },
  { label: 'AI Simulator', title: 'Future Me AI', detail: 'Life Trajectory & Mentors', palette: violet },
  { label: 'Campus Leadership', title: 'Gemini Ambassador', detail: 'Student Ambassador, Semester 2', palette: ocean },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education & Degree',
    title: 'B.E. in ECE',
    lines: ['Sri Eshwar College of Engineering, Coimbatore', 'Second-year student · CGPA 8.2'],
    chips: ['ECE', 'Analog IC', 'VLSI'],
  },
  {
    kicker: 'Engineering Focus',
    title: 'Hardware meets Software',
    lines: ['Analog IC Design · Semiconductor Devices · KiCad PCB Layout', 'Microprocessors · Verilog · Circuit Theory'],
    chips: ['KiCad', 'LTspice', 'Verilog'],
  },
  {
    kicker: 'Innovations & Hackathons',
    title: 'Student Entrepreneur',
    lines: ['PYHACKFEST 2026 2nd Place · FixTour AI Seed Fund Finalist', 'Interactive STEM Toy · Future Me AI Life Simulator'],
    chips: ['PYHACKFEST', 'Future Me', 'FixTour'],
  },
  {
    kicker: 'Campus Leadership',
    title: 'Student Ambassador',
    lines: ['Google Gemini Student Ambassador (Semester 2)', 'Toastmasters International Relations Representative'],
    chips: ['Google Gemini', 'Toastmasters', 'Leadership'],
  },
];

export type ProfileId = 'harinivas' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'harinivas',
    name: 'Harinivas',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: 'Seasons & Episodes', palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: 'Hardware & AI Originals', palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights & Honors', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: 'Hardware, Code & Tools', palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: 'Awards & Honors', palette: crimson },
  story: { nav: 'Resume', card: 'The Screenplay', meta: 'Full Resume & Download', palette: violet },
};
