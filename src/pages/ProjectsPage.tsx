import { SubpageLayout } from '../components/SubpageLayout';
import { projects } from '../data/portfolio';

// Complete list of verified projects with confirmed details
const ALL_PROJECTS = [
  ...projects,
  {
    id: 'opamp-light-controller',
    title: 'Automatic Light Controller using Op-Amp',
    year: '2024',
    genre: 'Electronics • Analog',
    logline: 'Op-amp comparator circuit comparing LDR sensor voltage against an adjustable reference threshold.',
    stack: ['Op-Amp (LM741/LM358)', 'NI Multisim', 'LDR Sensor', 'Analog Circuits'],
    build: [
      'Designed and simulated a closed-loop comparator circuit evaluating ambient illumination levels.',
      'Utilized a voltage divider network with a Light Dependent Resistor (LDR) for high-sensitivity detection.',
      'Calibrated reference voltage potentiometer to enable customizable sensitivity thresholds.',
    ],
    features: [
      'Precision op-amp threshold comparison',
      'LDR ambient light sensing',
      'Automated load switching simulation',
      'Low quiescent current consumption',
    ],
    metrics: [{ value: 'Analog', label: 'Circuit Sim' }],
    palette: { from: '#061a12', via: '#10523b', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow' as const,
  },
  {
    id: 'anonsphere',
    title: 'AnonSphere — Anonymous Campus Engagement',
    year: '2024',
    genre: 'Web • Security',
    logline: 'Multi-organization anonymous community engagement platform with verified email-domain onboarding.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    build: [
      'Led development of an anonymous discussion platform ensuring cryptographic privacy for collegiate feedback.',
      'Implemented domain-restricted email onboarding to ensure only verified students could participate anonymously.',
      'Built automated content moderation and community voting to deter toxicity while preserving anonymity.',
    ],
    features: [
      'Domain-verified anonymous onboarding',
      'Community voting and score sorting',
      'Automated abuse detection filters',
      'Multi-organization partition architecture',
    ],
    metrics: [{ value: 'Team Lead', label: 'Architecture' }],
    palette: { from: '#1a0624', via: '#521273', to: '#09050d', accent: '#c084fc' },
    motif: 'shield' as const,
  },
  {
    id: 'skillmatch-ai',
    title: 'SkillMatch AI — Internship Matching Platform',
    year: '2026',
    genre: 'AI • EdTech',
    logline: 'Student internship-matching engine ranking candidate fit from verified skills, repositories, and interests.',
    stack: ['React', 'TypeScript', 'Node.js', 'Vector Embeddings', 'AI Ranking'],
    build: [
      'Concept and early development of an algorithmic matching service connecting ECE/CS students with startups.',
      'Designed a multi-factor ranking algorithm scoring candidate projects, GitHub activity, and technical skills.',
      'Built responsive interface for candidate profile intake and recruiter evaluation pipelines.',
    ],
    features: [
      'Multi-factor candidate fit ranking',
      'Direct GitHub and project portfolio parsing',
      'Recruiter candidate dashboard',
      'In active prototype development',
    ],
    metrics: [{ value: 'In Dev', label: 'Prototype' }],
    palette: { from: '#0b1626', via: '#1b4b7a', to: '#060a12', accent: '#38bdf8' },
    motif: 'tenants' as const,
  },
];

export default function ProjectsPage() {
  return (
    <SubpageLayout currentPath="/projects">
      <div className="gutter mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
          <a href="/" className="hover:text-bone">Home</a>
          <span>/</span>
          <span className="text-crimson-2">Projects</span>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">Engineering & Software Portfolio</p>
          <h1 className="mt-2 font-display text-5xl leading-tight text-bone sm:text-6xl lg:text-7xl">
            Engineering Projects
          </h1>
          <p className="mt-4 text-lg text-bone/85 leading-relaxed sm:text-xl">
            Documented engineering work across analog hardware, KiCad PCB layout, machine learning systems, embedded IoT devices, and collegiate AI prototypes.
          </p>
        </div>

        {/* Filter / Category Quick Links */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-semibold text-bone">
            All Verified Projects ({ALL_PROJECTS.length})
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-mist">
            Hardware & Analog
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-mist">
            Machine Learning & AI
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-mist">
            Web & Systems
          </span>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 space-y-10">
          {ALL_PROJECTS.map((proj) => (
            <article
              key={proj.id}
              id={proj.id}
              className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-9 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson-2">
                    {proj.genre} · {proj.year}
                  </span>
                  <h2 className="mt-1 font-display text-3xl text-bone sm:text-4xl">{proj.title}</h2>
                </div>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-bone hover:border-white hover:bg-white/10"
                  >
                    GitHub Repository ↗
                  </a>
                )}
              </div>

              <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
                {proj.logline}
              </p>

              {/* Technical Implementation */}
              <div className="mt-6 grid gap-6 md:grid-cols-[1.5fr_1fr]">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Problem & My Contribution</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-bone/80">
                    {proj.build.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Implemented Features</h3>
                  <ul className="mt-3 space-y-1.5 text-xs text-bone/75">
                    {proj.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-crimson-2">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Technologies Used</h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {proj.stack.map((stk) => (
                        <span key={stk} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-bone font-mono">
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink-2 p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl text-bone">Explore Analog IC & VLSI Curriculum</h3>
            <p className="text-xs text-mist">Read about transistor circuits, op-amp design, and hardware tools.</p>
          </div>
          <a href="/vlsi-analog-ic" className="rounded-md bg-bone px-5 py-2.5 text-xs font-bold text-ink hover:bg-white">
            Analog IC & VLSI Overview →
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
