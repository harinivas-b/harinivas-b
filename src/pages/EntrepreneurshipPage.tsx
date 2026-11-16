import { SubpageLayout } from '../components/SubpageLayout';
import { profile } from '../data/portfolio';

export default function EntrepreneurshipPage() {
  return (
    <SubpageLayout currentPath="/entrepreneurship">
      <div className="gutter mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
          <a href="/" className="hover:text-bone">Home</a>
          <span>/</span>
          <span className="text-crimson-2">Entrepreneurship</span>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">Venture Building & Product Prototyping</p>
          <h1 className="mt-2 font-display text-5xl leading-tight text-bone sm:text-6xl lg:text-7xl">
            Student Entrepreneurship
          </h1>
          <p className="mt-4 text-lg text-bone/85 leading-relaxed sm:text-xl">
            Early-stage startup initiatives, product prototyping, collegiate seed fund pitches, and problem-driven venture exploration in Coimbatore and Tamil Nadu.
          </p>
        </div>

        {/* Transparency note */}
        <div className="mt-8 rounded-xl border border-white/10 bg-ink-2/60 p-5 text-xs leading-relaxed text-bone/85">
          <strong className="text-crimson-2 uppercase tracking-wide">Venture Status Transparency:</strong> The initiatives detailed below represent authentic collegiate innovation projects, competitive pitches, and prototype-stage applications. They are developing ventures and research prototypes, not publicly traded or commercially mature corporations.
        </div>

        {/* Ventures Grid */}
        <div className="mt-14 space-y-10">
          {/* Venture 1: FixTour AI */}
          <article className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-9 backdrop-blur">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-[#34d399]">
                  Seed Fund Finalist · 2026
                </span>
                <h2 className="mt-2 font-display text-3xl text-bone sm:text-4xl">FixTour AI — Sustainable Tourism</h2>
              </div>
              <span className="text-xs font-semibold text-mist">SaaS • AI</span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
              FixTour AI addresses fragmented eco-tourism booking and verified local operator onboarding across regional travel destinations.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">The Problem & Concept</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  Eco-conscious travelers struggle to find authenticated, zero-waste local operators, while independent regional guides lack digital booking infrastructure. FixTour AI creates an interactive platform bridging certified local operators with carbon-conscious travelers.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Key Milestones & Pitching</h3>
                <ul className="mt-2 space-y-2 text-xs leading-relaxed text-bone/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#34d399] font-bold">✓</span>
                    <span><strong>SECE Seed Fund 2026:</strong> Pitched and advanced as an official collegiate seed funding finalist.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#34d399] font-bold">✓</span>
                    <span><strong>MVP Architecture:</strong> Built responsive React/TypeScript front-end backed by Supabase for itinerary optimization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#34d399] font-bold">✓</span>
                    <span><strong>Operator Dashboard:</strong> Prototyped merchant registration and route verification flows.</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Venture 2: SkillMatch AI */}
          <article className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-9 backdrop-blur">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-[#38bdf8]">
                  In Active Development · 2026
                </span>
                <h2 className="mt-2 font-display text-3xl text-bone sm:text-4xl">SkillMatch AI — Talent Discovery</h2>
              </div>
              <span className="text-xs font-semibold text-mist">EdTech • AI</span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
              Automated collegiate internship and project matching platform ranking candidate suitability through verified GitHub repositories, practical skills, and portfolio artifacts.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">The Problem</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  Traditional resume screening fails to assess practical engineering competence for second and third-year students. SkillMatch AI evaluates actual project code, circuit schematics, and hackathon accomplishments to match students directly with early-stage startups.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Product Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  Eliminates recruiter friction by generating multi-dimensional competency scores across software stacks and hardware competencies, replacing generic keyword filtering with proof-of-work validation.
                </p>
              </div>
            </div>
          </article>

          {/* Venture 3: BISHOP */}
          <article className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-9 backdrop-blur">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-[#c084fc]">
                  Hyperlocal Prototype · 2026
                </span>
                <h2 className="mt-2 font-display text-3xl text-bone sm:text-4xl">BISHOP — Local Food Platform</h2>
              </div>
              <span className="text-xs font-semibold text-mist">Commerce • Web</span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-bone/90 sm:text-lg">
              Hyperlocal food discovery platform connecting students and local eateries within a 10km radius with digital menus and live merchant analytics.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Target Community</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  Designed for collegiate student clusters and nearby food vendors who lack access to exorbitant high-commission delivery aggregators.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-mist">Key Features</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  Features real-time item availability toggles, pre-order queues to reduce waiting lines during lunch peaks, and lightweight shopkeeper billing dashboards.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink-2 p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl text-bone">Have a Startup Idea or Need a Co-Builder?</h3>
            <p className="text-xs text-mist">Open to discussing venture ideas at the intersection of AI, hardware, and collegiate technology.</p>
          </div>
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Venture / Startup Discussion')}`} className="rounded-md bg-crimson px-5 py-2.5 text-xs font-bold text-white hover:bg-crimson-2">
            Let's Talk →
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
