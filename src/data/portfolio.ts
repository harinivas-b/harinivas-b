/**
 * Central portfolio data — updated for Harinivas B.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Harinivas B',
  displayName: 'Harinivas B',
  firstName: 'HARINIVAS',
  seriesTag: 'THE SERIES',
  originalLabel: 'A HARINIVAS ORIGINAL',
  role: 'ECE Student | Aspiring Analog IC Design | Student Entrepreneur',
  tagline: ['ECE Student', 'Analog IC Design', 'Student Entrepreneur'],
  intro:
    'A second-year B.E. Electronics and Communication Engineering student exploring the intersection of Analog IC design, VLSI fundamentals, and modern software development to build innovative AI products and technology solutions.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'harinivas2301@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harinivas23b',
    github: 'https://github.com/harinivas-b',
  },
  resumePdf: '#',
  portrait: {
    src: '/assets/profile.jpg',
    srcSet: '/assets/profile.jpg 1x',
    alt: 'Portrait of Harinivas B',
  },
  interests: ['Analog IC Design', 'VLSI Fundamentals', 'SoC Architecture', 'AI Products', 'Entrepreneurship'],
};

export const education = [
  {
    school: 'Sri Eshwar College of Engineering',
    place: 'Coimbatore, TN',
    degree: 'Bachelor of Engineering — Electronics and Communication Engineering',
    period: 'Present (Second-year student)',
    score: 'In Progress',
  }
];

export const experience = [
  {
    company: 'Student Projects & Leadership',
    role: 'Creator & Developer',
    place: 'College',
    period: 'Ongoing',
    points: [
      'Developed an AI-powered e-commerce recommendation system utilizing collaborative and content-based filtering.',
      'Prototyped Embedded IoT solutions for smart navigation and asset tracking.',
      'Active participant in hackathons, achieving Second Place at PYHACKFEST 2026.',
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
    id: 'pyhackfest',
    title: 'AI Commerce Recommender',
    year: '2026',
    genre: 'AI • Web',
    logline: 'AI-powered e-commerce recommendation system using collaborative & content-based filtering.',
    stack: ['Flask', 'scikit-learn', 'Python'],
    build: [
      'Built for PYHACKFEST 2026 (Secured 2nd Place).',
      'Implemented recommendation models with email verification and order notifications.',
    ],
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Order notifications',
    ],
    metrics: [
      { value: '2nd Place', label: 'PYHACKFEST 2026' }
    ],
    github: 'https://github.com/harinivas-b/PYHACKFEST_2026',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'assert-tracking',
    title: 'BLE Smart Room Tracking',
    year: '2024',
    genre: 'IoT • SaaS',
    logline: 'Embedded IoT and SaaS application to track assets and guide visually challenged individuals.',
    stack: ['IoT', 'Embedded Systems', 'SaaS'],
    build: [
      'Designed to track assets and guide visually challenged people to specific rooms in institutions.',
    ],
    features: [
      'Asset tracking',
      'Smart navigation assistance',
    ],
    metrics: [],
    github: 'https://github.com/harinivas-b/Assert-Tracking-and-Smart-Navigation',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'fixtour-ai',
    title: 'FixTour AI',
    year: '2024',
    genre: 'AI • Platform',
    logline: 'Pending verification (Repository link currently inaccessible).',
    stack: [],
    build: ['Details to be updated once verified.'],
    features: [],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'skillmatch-ai',
    title: 'SkillMatch AI',
    year: '2024',
    genre: 'AI',
    logline: 'Pending verification.',
    stack: [],
    build: ['Details to be updated once verified.'],
    features: [],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'op-amp-light',
    title: 'Automatic Light Controller',
    year: '2024',
    genre: 'Hardware',
    logline: 'Automatic Light Controller using an Op-Amp. (Pending verification)',
    stack: ['Op-Amp', 'Electronics'],
    build: ['Details to be updated once verified.'],
    features: [],
    metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  }
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
    detail: 'AI-powered e-commerce recommendation system.',
    laurel: 'Second Place',
  },
  {
    id: 'canva',
    title: 'First Prize',
    org: 'Canva',
    detail: 'Pending verification details.',
    laurel: 'First Prize',
  },
  {
    id: 'toastmasters',
    title: 'Best Role Player',
    org: 'Toastmasters',
    detail: 'Pending verification details.',
    laurel: 'Best Role Player',
  },
  {
    id: 'iitb',
    title: 'Participant / Recognition',
    org: 'IIT Bombay Illuminate',
    detail: 'Pending verification details.',
    laurel: 'Recognition',
  }
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  // To be filled from LinkedIn later
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'electronics',
    title: 'Electronics & Hardware',
    subtitle: 'Core Engineering',
    skills: [
      { name: 'VLSI fundamentals', mono: 'Vl' },
      { name: 'Verilog', mono: 'Vr' },
      { name: 'Analog IC design', mono: 'Ic' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming',
    skills: [
      { name: 'C', mono: 'C' },
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Software',
    subtitle: 'Development',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'Soft Skills',
    skills: [
      { name: 'Problem solving', mono: 'Ps' },
      { name: 'Entrepreneurship', mono: 'En' },
    ],
  }
];

export const skillEvidence: Record<string, string[]> = {};

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
    period: 'Present',
    synopsis: 'B.E. Electronics and Communication Engineering at Sri Eshwar College of Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'ECE Journey',
        description: 'Second-year student diving deep into Analog IC design and VLSI fundamentals.',
        tags: ['ECE', 'Analog IC'],
        runtime: 'Ongoing',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Hackathon Success', title: 'PYHACKFEST 2026', detail: 'Second Place', palette: crimson },
  { label: 'Hardware Interest', title: 'Analog IC Design', detail: 'Aspiring Designer', palette: ocean },
  { label: 'IoT Project', title: 'BLE Smart Tracking', detail: 'Asset tracking & navigation', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · ECE',
    lines: ['Sri Eshwar College of Engineering, Coimbatore', 'Second-year student'],
    chips: ['ECE', 'Hardware'],
  },
  {
    kicker: 'Interests',
    title: 'Hardware meets Software',
    lines: ['Analog IC Design · VLSI Fundamentals · SoC Architecture', 'Software Development · AI Products'],
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
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: 'Ongoing Journey', palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: 'Builds & Hacks', palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: 'Engineering & Software', palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: 'Awards & Roles', palette: crimson },
  story: { nav: 'Contact', card: 'Let\'s Connect', meta: 'Reach out', palette: violet },
};
