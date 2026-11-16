import { education, profile, certifications } from '../data/portfolio';
import { SubpageLayout } from '../components/SubpageLayout';
import { Tilt } from '../components/fx';

export default function AboutPage() {
  return (
    <SubpageLayout currentPath="/about">
      <div className="gutter mx-auto max-w-5xl">
        {/* Header Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
          <a href="/" className="hover:text-bone">Home</a>
          <span>/</span>
          <span className="text-crimson-2">About</span>
        </nav>

        {/* Hero Banner */}
        <div className="grid gap-10 md:grid-cols-[1fr_320px] lg:gap-14 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">Biography & Background</p>
            <h1 className="mt-2 font-display text-5xl leading-tight text-bone sm:text-6xl lg:text-7xl">
              About Harinivas B
            </h1>
            <p className="mt-4 text-lg font-medium text-bone/90 leading-relaxed sm:text-xl">
              Electronics and Communication Engineering student at Sri Eshwar College of Engineering, Coimbatore, with an active focus on Analog IC Design, VLSI, technology entrepreneurship, and hands-on electronics prototyping.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-bone">
                📍 Coimbatore, Tamil Nadu, India
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-bone">
                🎓 B.E. ECE (2025–2029) · CGPA 8.2
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-bone">
                ⚡ Analog IC & VLSI Focus
              </span>
            </div>
          </div>

          <Tilt max={6} className="mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-2xl bg-ink-2 p-3 ring-1 ring-white/10 shadow-2xl">
              <img
                src="/assets/portrait-720.webp"
                alt="Portrait of Harinivas B"
                className="w-full rounded-xl object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="pt-3 text-center">
                <p className="font-display text-xl text-bone">Harinivas B</p>
                <p className="text-xs text-mist">Sri Eshwar College of Engineering</p>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Core Journey & Story */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Engineering Journey & Motivation</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-bone/80">
            <p>
              My interest in electronics began with an urge to understand what happens beneath software abstraction layers—at the physical silicon and transistor level. Currently studying Electronics and Communication Engineering at <strong>Sri Eshwar College of Engineering</strong> in Coimbatore, I combine core electronics theory with practical hardware fabrication and software programming.
            </p>
            <p>
              Rather than viewing hardware and software as isolated domains, I actively bridge them: designing custom printed circuit boards in <strong>KiCad</strong>, simulating transistor circuits and operational amplifiers in <strong>LTspice</strong>, studying digital design fundamentals with <strong>Verilog</strong>, and building AI-driven web systems in <strong>Python</strong> and <strong>TypeScript</strong>.
            </p>
            <p>
              Beyond technical exploration, I am a passionate student entrepreneur and communicator. Having co-developed hackathon-winning software solutions and advanced as a finalist in collegiate seed funding rounds, I seek to apply engineering rigor toward products with tangible community impact.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Formal Education</h2>
          <div className="mt-8 space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="rounded-xl border border-white/10 bg-ink-2/60 p-6 backdrop-blur">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-lg font-bold text-bone">{edu.degree}</h3>
                  <span className="text-xs font-semibold text-mist">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-crimson-2 font-medium">{edu.school}, {edu.place}</p>
                <p className="mt-2 text-sm text-bone/80">Academic Record: <strong className="text-bone">{edu.score}</strong></p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Interests Matrix */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Primary Fields of Focus</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-ink-2/60 p-5">
              <span className="text-2xl">⚡</span>
              <h3 className="mt-3 font-sans text-base font-bold text-bone">Analog IC & Electronics</h3>
              <p className="mt-2 text-xs leading-relaxed text-mist">
                Transistor characteristics (BJT/MOSFET), differential amplifiers, op-amp configurations, oscillator design, and analog filtering circuits.
              </p>
              <a href="/vlsi-analog-ic" className="mt-3 inline-block text-xs font-semibold text-crimson-2 hover:underline">
                Explore Analog IC & VLSI →
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2/60 p-5">
              <span className="text-2xl">🛠️</span>
              <h3 className="mt-3 font-sans text-base font-bold text-bone">Hardware & PCB Prototyping</h3>
              <p className="mt-2 text-xs leading-relaxed text-mist">
                Schematic capture, dual-layer PCB layout in KiCad, component selection, rapid prototyping, and soldering verified physical prototypes.
              </p>
              <a href="/projects" className="mt-3 inline-block text-xs font-semibold text-crimson-2 hover:underline">
                View PCB Projects →
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2/60 p-5">
              <span className="text-2xl">🚀</span>
              <h3 className="mt-3 font-sans text-base font-bold text-bone">Student Entrepreneurship</h3>
              <p className="mt-2 text-xs leading-relaxed text-mist">
                Ideation, problem discovery, MVP development, pitch presentations, and business modeling for early-stage collegiate ventures.
              </p>
              <a href="/entrepreneurship" className="mt-3 inline-block text-xs font-semibold text-crimson-2 hover:underline">
                View Startup Work →
              </a>
            </div>
          </div>
        </section>

        {/* Certifications Snapshot */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Certifications & Training</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <span key={cert.name} className="rounded-lg border border-white/10 bg-ink-2 px-3 py-2 text-xs text-bone">
                <strong className="text-mist">{cert.issuer}:</strong> {cert.name}
              </span>
            ))}
          </div>
        </section>

        {/* Quick Links & CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-ink-2 to-black p-8">
          <div>
            <h3 className="font-display text-2xl text-bone">Connect with Harinivas B</h3>
            <p className="text-xs text-mist">Open to engineering project collaborations, student internships, and discussions in Analog IC / VLSI.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-md bg-bone px-5 py-2.5 text-xs font-bold text-ink hover:bg-white">
              LinkedIn Profile ↗
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="glass rounded-md px-5 py-2.5 text-xs font-semibold text-bone hover:bg-white/15">
              GitHub Profile ↗
            </a>
            <a href={profile.resumePdf} download="Harinivas_B_Resume.pdf" className="glass rounded-md px-5 py-2.5 text-xs font-semibold text-bone hover:bg-white/15">
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
