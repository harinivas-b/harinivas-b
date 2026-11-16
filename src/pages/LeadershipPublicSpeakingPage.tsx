import { SubpageLayout } from '../components/SubpageLayout';
import { profile } from '../data/portfolio';

export default function LeadershipPublicSpeakingPage() {
  return (
    <SubpageLayout currentPath="/leadership-public-speaking">
      <div className="gutter mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
          <a href="/" className="hover:text-bone">Home</a>
          <span>/</span>
          <span className="text-crimson-2">Leadership & Public Speaking</span>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">Communication & Campus Initiatives</p>
          <h1 className="mt-2 font-display text-5xl leading-tight text-bone sm:text-6xl lg:text-7xl">
            Leadership & Public Speaking
          </h1>
          <p className="mt-4 text-lg text-bone/85 leading-relaxed sm:text-xl">
            Documented public speaking achievements, collegiate ambassadorships, community coordination, and student leadership roles.
          </p>
        </div>

        {/* Fact Disclosure */}
        <div className="mt-8 rounded-xl border border-white/10 bg-ink-2/60 p-5 text-xs leading-relaxed text-bone/85">
          <strong className="text-crimson-2 uppercase tracking-wide">Verified Scope:</strong> This page details confirmed public speaking recognitions (including Toastmasters Best Role Player), collegiate ambassador programs, and school-level leadership responsibilities. In accordance with strict factual verification, I am an <em>Ex-Toastmaster</em> and do not claim professional keynote speaking status.
        </div>

        {/* Core Achievements & Awards */}
        <section className="mt-14 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Confirmed Speaking & Contest Honors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d9b46a]/30 bg-gradient-to-b from-[#2a1f10]/80 to-ink-2 p-7">
              <span className="rounded bg-[#d9b46a]/20 px-2.5 py-1 text-xs font-bold uppercase text-[#d9b46a]">Toastmasters Honor</span>
              <h3 className="mt-3 font-display text-2xl text-bone sm:text-3xl">Best Role Player Award</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-[#d9b46a]">Toastmasters International</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Awarded <strong>Best Role Player</strong> during structured Toastmasters club meetings for exemplary speech evaluations, meeting moderation, and structured verbal delivery. Demonstrates mastery of impromptu speaking, debate analysis, and audience engagement.
              </p>
            </div>

            <div className="rounded-2xl border border-crimson-2/30 bg-gradient-to-b from-[#24060d]/80 to-ink-2 p-7">
              <span className="rounded bg-crimson-2/20 px-2.5 py-1 text-xs font-bold uppercase text-crimson-2">Hackathon Pitching</span>
              <h3 className="mt-3 font-display text-2xl text-bone sm:text-3xl">PYHACKFEST 2026 — 2nd Place</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-crimson-2">Technical Pitch & Architecture</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Led technical pitching and system demonstration before an engineering jury at PYHACKFEST 2026. Successfully presented the architecture of an AI-powered e-commerce recommender, winning 2nd Place among collegiate engineering teams.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-2 p-7">
              <span className="rounded bg-white/10 px-2.5 py-1 text-xs font-bold uppercase text-bone">Entrepreneurship Pitch</span>
              <h3 className="mt-3 font-display text-2xl text-bone sm:text-3xl">IIT Bombay Illuminate</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">Collegiate Business Pitch</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Participated in the prestigious IIT Bombay Illuminate entrepreneurship workshop and pitch competition, presenting early-stage startup concepts and business models.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-2 p-7">
              <span className="rounded bg-white/10 px-2.5 py-1 text-xs font-bold uppercase text-bone">Visual Communication</span>
              <h3 className="mt-3 font-display text-2xl text-bone sm:text-3xl">Canva Contest — First Prize</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">Sri Eshwar College of Engineering</p>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Awarded First Prize in visual storytelling and graphic composition for technical presentations and creative communication.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership & Campus Ambassador Roles */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Campus Leadership & Ambassadorships</h2>
          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-white/10 bg-ink-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-lg font-bold text-bone">Google Gemini Student Ambassador</h3>
                <span className="text-xs font-semibold text-mist">Semester 2 · Sri Eshwar College of Engineering</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">
                Selected as an official campus ambassador for Google Gemini. Facilitated student awareness sessions on multimodal generative AI, demonstrating prompt engineering, AI developer tooling, and responsible AI practices to engineering peers.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-lg font-bold text-bone">Tata Imagination Challenge 2026 Campus Ambassador</h3>
                <span className="text-xs font-semibold text-mist">2026</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">
                Appointed as Campus Ambassador for the Tata Imagination Challenge, driving innovation outreach and student participation across campus.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-lg font-bold text-bone">Internshala Student Partner (ISP) 2026</h3>
                <span className="text-xs font-semibold text-mist">2026</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">
                Selected as an ISP campus representative, helping fellow engineering students discover internship opportunities, skill training, and industry preparation.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-lg font-bold text-bone">Unstop Campus Champion 2026</h3>
                <span className="text-xs font-semibold text-mist">2026</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">
                Campus representative for Unstop competitions, hackathons, and corporate challenges.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-lg font-bold text-bone">Assistant School Pupil Leader (ASPL)</h3>
                <span className="text-xs font-semibold text-mist">2022–2023 · Bharatiya Vidya Bhavan Matriculation HSS, Ajjanur</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/80">
                Elected to executive school student leadership, assisting in campus discipline, assembly speech moderation, inter-house academic competitions, and student grievance coordination.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink-2 p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl text-bone">Interested in Collaboration or Speaking?</h3>
            <p className="text-xs text-mist">Reach out for panel discussions, peer workshops, or technical pitches.</p>
          </div>
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Collaboration / Speaking Opportunity')}`} className="rounded-md bg-crimson px-5 py-2.5 text-xs font-bold text-white hover:bg-crimson-2">
            Get in Touch →
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
