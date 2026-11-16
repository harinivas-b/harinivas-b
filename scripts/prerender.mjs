import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const GOOGLE_VERIFICATION = '<meta name="google-site-verification" content="kO4C3qEi0XuAMY_BoBy6XOrEy2R3xNnQuE2Nv83DRvs" />';

const ROUTES = [
  {
    path: '/',
    title: 'Harinivas B | ECE Student | Analog IC & VLSI Portfolio',
    description: 'Official portfolio of Harinivas B, an Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore, interested in Analog IC Design, VLSI, electronics projects, technology, and entrepreneurship.',
    canonical: 'https://harinivas-b.vercel.app/',
    h1: 'Harinivas B',
    subheading: 'ECE Student | Aspiring Analog IC / VLSI Engineer | Student Entrepreneur',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://harinivas-b.vercel.app/#website',
          'url': 'https://harinivas-b.vercel.app/',
          'name': 'Harinivas B Portfolio',
          'description': 'Official portfolio and engineering projects of Harinivas B',
          'publisher': { '@id': 'https://harinivas-b.vercel.app/#person' }
        },
        {
          '@type': 'ProfilePage',
          '@id': 'https://harinivas-b.vercel.app/#profilepage',
          'url': 'https://harinivas-b.vercel.app/',
          'name': 'Harinivas B | Official Portfolio',
          'mainEntity': { '@id': 'https://harinivas-b.vercel.app/#person' }
        },
        {
          '@type': 'Person',
          '@id': 'https://harinivas-b.vercel.app/#person',
          'name': 'Harinivas B',
          'alternateName': 'Harinivas',
          'url': 'https://harinivas-b.vercel.app/',
          'image': 'https://harinivas-b.vercel.app/assets/profile.jpg',
          'jobTitle': 'Aspiring Analog IC / VLSI Engineer & Student Entrepreneur',
          'description': 'Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore. Interested in Analog IC Design, VLSI, transistor circuits, and technology entrepreneurship.',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Coimbatore',
            'addressRegion': 'Tamil Nadu',
            'addressCountry': 'India'
          },
          'sameAs': [
            'https://www.linkedin.com/in/harinivas23b',
            'https://github.com/harinivas-b'
          ],
          'knowsAbout': [
            'Analog IC Design',
            'VLSI Fundamentals',
            'Operational Amplifiers',
            'Transistor-Level Circuit Design',
            'Colpitts and Hartley Oscillators',
            'KiCad PCB Layout',
            'LTspice Simulation',
            'Verilog HDL',
            'Embedded Systems',
            'Python',
            'C Programming',
            'Public Speaking',
            'Toastmasters'
          ]
        }
      ]
    },
    semanticContent: `
      <header class="sr-only">
        <h1>Harinivas B</h1>
        <p>ECE Student | Aspiring Analog IC / VLSI Engineer | Student Entrepreneur</p>
        <p>Location: Coimbatore, Tamil Nadu, India · College: Sri Eshwar College of Engineering</p>
      </header>
      <main class="sr-only">
        <section>
          <h2>About Harinivas B</h2>
          <p>Harinivas B is a second-year Electronics and Communication Engineering undergraduate at Sri Eshwar College of Engineering in Coimbatore, Tamil Nadu, India. Passionate about Analog IC design, transistor circuits, operational amplifiers, and VLSI fundamentals.</p>
          <nav>
            <a href="/about">About Harinivas B</a> |
            <a href="/vlsi-analog-ic">Analog IC & VLSI</a> |
            <a href="/projects">Engineering Projects</a> |
            <a href="/leadership-public-speaking">Leadership & Public Speaking</a> |
            <a href="/entrepreneurship">Student Entrepreneurship</a>
          </nav>
        </section>
        <section>
          <h2>Featured Engineering Projects</h2>
          <ul>
            <li><strong>Interactive Sound STEM Toy:</strong> Custom dual-layer KiCad PCB featuring a touch-activated astable analog oscillator circuit.</li>
            <li><strong>PYHACKFEST 2026 AI Commerce Recommender:</strong> Second Place winner, collegiate machine learning recommendation engine using Python and scikit-learn.</li>
            <li><strong>FixTour AI:</strong> Sustainable tourism platform and SECE Seed Fund 2026 finalist.</li>
            <li><strong>Automatic Light Controller using Op-Amp:</strong> Closed-loop comparator circuit simulated in NI Multisim using LDR ambient light sensing.</li>
            <li><strong>Future Me AI:</strong> Life simulation engine and milestone timeline visualizer in React/TypeScript.</li>
            <li><strong>BLE Smart Room Tracking:</strong> Indoor positioning beacon system for accessible indoor navigation.</li>
            <li><strong>AnonSphere:</strong> Anonymous campus feedback platform with domain verification.</li>
          </ul>
        </section>
        <section>
          <h2>Leadership & Honors</h2>
          <p>Best Role Player at Toastmasters International, Google Gemini Student Ambassador (Semester 2), Tata Imagination Challenge Campus Ambassador 2026, Unstop Campus Champion, and NPTEL Elite+Topper (Top 5% in Python nationwide).</p>
        </section>
      </main>
    `
  },
  {
    path: '/about',
    title: 'About Harinivas B | ECE Student & Aspiring Analog IC Engineer',
    description: 'Learn about Harinivas B, a B.E. Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore. Background, academic journey, and engineering interests.',
    canonical: 'https://harinivas-b.vercel.app/about',
    h1: 'About Harinivas B',
    subheading: 'Biography, Education, and Engineering Direction',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'url': 'https://harinivas-b.vercel.app/about',
      'name': 'About Harinivas B',
      'mainEntity': {
        '@type': 'Person',
        'name': 'Harinivas B',
        'jobTitle': 'ECE Student & Aspiring Analog IC / VLSI Engineer',
        'url': 'https://harinivas-b.vercel.app/',
        'sameAs': [
          'https://www.linkedin.com/in/harinivas23b',
          'https://github.com/harinivas-b'
        ]
      }
    },
    semanticContent: `
      <article class="sr-only">
        <h1>About Harinivas B</h1>
        <p>Second-year B.E. Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore, Tamil Nadu, India.</p>
        <h2>Education</h2>
        <ul>
          <li>Sri Eshwar College of Engineering — B.E. in ECE (2025–2029 Expected), CGPA 8.2</li>
          <li>Bharathiya Vidya Bhavan — Higher Secondary Class XII (2024–2025), 71.16% (Mathematics Topper)</li>
          <li>Bharathiya Vidya Bhavan — Secondary School Class X (2022–2023), 84.6% (Math & Science Topper)</li>
        </ul>
        <h2>Technical Core</h2>
        <p>Analog Electronics, Transistor circuits, Op-Amps, KiCad PCB design, LTspice simulation, Verilog HDL, Python, and C programming.</p>
      </article>
    `
  },
  {
    path: '/vlsi-analog-ic',
    title: 'Analog IC Design & VLSI Fundamentals | Harinivas B',
    description: 'Technical learning path and projects of Harinivas B in Analog IC design, op-amp circuits, transistor-level design, KiCad PCB layout, and VLSI fundamentals.',
    canonical: 'https://harinivas-b.vercel.app/vlsi-analog-ic',
    h1: 'Analog IC Design & VLSI Fundamentals',
    subheading: 'Transistor-Level Circuits, Op-Amp Architectures, and EDA Workflows',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Analog IC Design and VLSI Fundamentals — Harinivas B',
      'author': {
        '@type': 'Person',
        'name': 'Harinivas B',
        'url': 'https://harinivas-b.vercel.app/'
      },
      'url': 'https://harinivas-b.vercel.app/vlsi-analog-ic',
      'description': 'Analog IC design, operational amplifiers, oscillator configurations, and VLSI fundamentals.'
    },
    semanticContent: `
      <article class="sr-only">
        <h1>Analog IC Design & VLSI Fundamentals</h1>
        <p>Curricular learning, lab experiments, simulation, and hardware prototypes by Harinivas B, ECE undergraduate at Sri Eshwar College of Engineering.</p>
        <h2>Core Focus Areas</h2>
        <ul>
          <li><strong>Op-Amp Circuits:</strong> Inverting, non-inverting, differential amplifiers, comparators, and active filters.</li>
          <li><strong>Oscillator Circuits:</strong> Colpitts, Hartley, and astable analog oscillator implementations.</li>
          <li><strong>EDA Software:</strong> KiCad for schematic capture and dual-layer PCB layout; LTspice for transient and AC analysis; NI Multisim for SPICE simulation.</li>
          <li><strong>VLSI & Digital Logic:</strong> Verilog HDL modeling, CMOS inverter transfer curves, and digital architecture fundamentals.</li>
        </ul>
      </article>
    `
  },
  {
    path: '/projects',
    title: 'Engineering Projects | Harinivas B | Hardware & AI',
    description: 'Explore verified engineering projects by Harinivas B: KiCad STEM Toy PCB, PYHACKFEST AI Recommender, FixTour AI, Op-Amp Light Controller, and BLE Tracking.',
    canonical: 'https://harinivas-b.vercel.app/projects',
    h1: 'Engineering Projects',
    subheading: 'Hardware PCBs, Analog Circuits, ML Systems, and Software Prototypes',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Engineering Projects by Harinivas B',
      'url': 'https://harinivas-b.vercel.app/projects',
      'author': {
        '@type': 'Person',
        'name': 'Harinivas B',
        'url': 'https://harinivas-b.vercel.app/'
      }
    },
    semanticContent: `
      <article class="sr-only">
        <h1>Engineering Projects by Harinivas B</h1>
        <h2>1. Interactive Sound STEM Toy (KiCad PCB)</h2>
        <p>Custom educational PCB designed in KiCad featuring touch-sensitive copper pads driving an astable analog oscillator tone circuit.</p>
        <h2>2. AI Commerce Recommender (PYHACKFEST 2026 - 2nd Place)</h2>
        <p>Collegiate hackathon prize-winning recommendation engine using Python, scikit-learn, and Flask with hybrid collaborative filtering.</p>
        <h2>3. FixTour AI (SECE Seed Fund Finalist 2026)</h2>
        <p>Eco-conscious route optimization and verified local tour guide onboarding platform.</p>
        <h2>4. Automatic Light Controller using Op-Amp</h2>
        <p>NI Multisim simulated comparator circuit measuring ambient light via LDR voltage division against a reference threshold.</p>
        <h2>5. BLE Smart Room & Asset Tracker</h2>
        <p>Bluetooth Low Energy beacon receiver prototype assisting visually challenged students with indoor orientation.</p>
        <h2>6. Future Me AI</h2>
        <p>Interactive career simulation engine generating milestone timelines and 2040 newspaper forecasts.</p>
        <h2>7. AnonSphere</h2>
        <p>Anonymous collegiate forum with institutional email verification and moderation voting.</p>
      </article>
    `
  },
  {
    path: '/leadership-public-speaking',
    title: 'Leadership & Public Speaking | Harinivas B',
    description: 'Documented leadership experience and public speaking achievements of Harinivas B, including Toastmasters Best Role Player, Google Gemini Ambassador, and ISP 2026.',
    canonical: 'https://harinivas-b.vercel.app/leadership-public-speaking',
    h1: 'Leadership & Public Speaking',
    subheading: 'Toastmasters Recognition, Collegiate Ambassadorships, and Campus Initiatives',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Leadership & Public Speaking — Harinivas B',
      'url': 'https://harinivas-b.vercel.app/leadership-public-speaking',
      'author': {
        '@type': 'Person',
        'name': 'Harinivas B',
        'url': 'https://harinivas-b.vercel.app/'
      }
    },
    semanticContent: `
      <article class="sr-only">
        <h1>Leadership and Public Speaking — Harinivas B</h1>
        <h2>Toastmasters Recognition</h2>
        <p>Awarded <strong>Best Role Player</strong> in Toastmasters International meetings for structured verbal evaluations, speech analysis, and meeting management. Ex-Toastmaster.</p>
        <h2>Campus Ambassadorships</h2>
        <ul>
          <li><strong>Google Gemini Student Ambassador:</strong> Conducted peer workshops on multimodal AI and developer tooling at Sri Eshwar College of Engineering.</li>
          <li><strong>Tata Imagination Challenge 2026 Campus Ambassador:</strong> Coordinated campus-wide outreach for student innovation.</li>
          <li><strong>Internshala Student Partner (ISP) 2026:</strong> Assisted student peers in discovering internship pathways.</li>
          <li><strong>Unstop Campus Champion 2026:</strong> Campus representative for competitive student hackathons and challenges.</li>
          <li><strong>Assistant School Pupil Leader (2022–2023):</strong> Executive student council leader at Bharatiya Vidya Bhavan Matriculation HSS, Ajjanur.</li>
        </ul>
      </article>
    `
  },
  {
    path: '/entrepreneurship',
    title: 'Student Entrepreneurship | Harinivas B | Startup Initiatives',
    description: 'Collegiate startup initiatives, product prototyping, and venture pitches by Harinivas B, including FixTour AI (SECE Seed Fund Finalist), SkillMatch AI, and BISHOP.',
    canonical: 'https://harinivas-b.vercel.app/entrepreneurship',
    h1: 'Student Entrepreneurship',
    subheading: 'Collegiate Ventures, Product Discovery, and Seed Fund Pitches',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Student Entrepreneurship — Harinivas B',
      'url': 'https://harinivas-b.vercel.app/entrepreneurship',
      'author': {
        '@type': 'Person',
        'name': 'Harinivas B',
        'url': 'https://harinivas-b.vercel.app/'
      }
    },
    semanticContent: `
      <article class="sr-only">
        <h1>Student Entrepreneurship — Harinivas B</h1>
        <p>Authentic collegiate innovation, early-stage product prototypes, and business pitch competitions in Coimbatore, Tamil Nadu.</p>
        <h2>1. FixTour AI — Sustainable Tourism</h2>
        <p>Collegiate Seed Funding Finalist (SECE Seed Fund 2026). Digital platform for authentic local guides, route verification, and carbon estimation.</p>
        <h2>2. SkillMatch AI — Competency-Based Talent Matching</h2>
        <p>Prototype platform assessing student proof-of-work, practical projects, and GitHub repositories for startup hiring.</p>
        <h2>3. BISHOP — Hyperlocal Dining Discovery</h2>
        <p>Proximity food discovery application connecting students with neighborhood eateries within a 10km radius with digital menus and availability tracking.</p>
        <h2>4. IIT Bombay Illuminate Pitch</h2>
        <p>Participated in entrepreneurship workshops and pitch competitions organized by IIT Bombay.</p>
      </article>
    `
  }
];

function generateHtml(template, route) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${route.description}" />`);

  // Replace or Add Canonical
  const canonicalTag = `<link rel="canonical" href="${route.canonical}" />`;
  if (/<link\s+rel="canonical".*?>/i.test(html)) {
    html = html.replace(/<link\s+rel="canonical".*?>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);
  }

  // OpenGraph Tags
  const ogTags = `
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta property="og:url" content="${route.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Harinivas B Portfolio" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />
  <meta name="twitter:url" content="${route.canonical}" />`;

  // Replace existing OG tags
  html = html.replace(/<meta\s+property="og:title".*?>/i, '');
  html = html.replace(/<meta\s+property="og:description".*?>/i, '');
  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Inject Structured Data (JSON-LD)
  const jsonLdTag = `\n  <script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n  </script>\n`;
  html = html.replace('</head>', `${jsonLdTag}</head>`);

  // Inject Crawler-Accessible Semantic Content inside body without breaking root
  const crawlerSection = `\n  <div id="seo-prerender-content" class="sr-only" aria-hidden="false">\n${route.semanticContent}\n  </div>\n`;
  html = html.replace('<div id="root"></div>', `<div id="root"></div>${crawlerSection}`);

  // Ensure verification tag is intact
  if (!html.includes('google-site-verification')) {
    html = html.replace('</head>', `  ${GOOGLE_VERIFICATION}\n  </head>`);
  }

  return html;
}

export function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf8');

  for (const route of ROUTES) {
    const routeHtml = generateHtml(baseTemplate, route);
    if (route.path === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), routeHtml, 'utf8');
      console.log('✓ Prerendered root / -> dist/index.html');
    } else {
      const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml, 'utf8');
      console.log(`✓ Prerendered ${route.path} -> dist${route.path}/index.html`);
    }
  }
}

prerender();
