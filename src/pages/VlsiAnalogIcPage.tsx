import { SubpageLayout } from '../components/SubpageLayout';

export default function VlsiAnalogIcPage() {
  return (
    <SubpageLayout currentPath="/vlsi-analog-ic">
      <div className="gutter mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist">
          <a href="/" className="hover:text-bone">Home</a>
          <span>/</span>
          <span className="text-crimson-2">Analog IC & VLSI</span>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">Technical Specialization</p>
          <h1 className="mt-2 font-display text-5xl leading-tight text-bone sm:text-6xl lg:text-7xl">
            Analog IC Design & VLSI Fundamentals
          </h1>
          <p className="mt-4 text-lg text-bone/85 leading-relaxed sm:text-xl">
            Technical learning path, practical electronics coursework, simulation workflows, and hardware projects exploring transistor-level circuit design, operational amplifiers, and VLSI fundamentals.
          </p>
        </div>

        {/* Positioning Disclaimer */}
        <div className="mt-8 rounded-xl border border-crimson-2/30 bg-crimson/10 p-5 text-xs leading-relaxed text-bone/90">
          <strong className="text-crimson-2 uppercase tracking-wide">Professional Transparency:</strong> I am an undergraduate Electronics and Communication Engineering student at Sri Eshwar College of Engineering actively developing foundational and practical knowledge in Analog IC design and VLSI. I do not claim past silicon tape-outs or commercial chip fabrication experience; this page documents verified coursework, lab experiments, simulation tools, and physical PCB prototypes.
        </div>

        {/* Core Domains */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Domain 1: Analog IC & Circuits */}
          <div className="rounded-2xl border border-white/10 bg-ink-2/60 p-7">
            <span className="inline-block rounded-md bg-crimson/20 px-2.5 py-1 text-xs font-bold text-crimson-2">01 · CIRCUIT DESIGN</span>
            <h2 className="mt-3 font-display text-2xl text-bone sm:text-3xl">Analog Electronics & Op-Amp Circuits</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Foundational study of active analog circuits, small-signal transistor models, feedback networks, and frequency response analysis.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-bone/85">
              <li className="flex items-start gap-2">
                <span className="text-crimson-2 font-bold">•</span>
                <span><strong>Op-Amp Architectures:</strong> Inverting, non-inverting, differential, summing amplifiers, and precision comparators.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-crimson-2 font-bold">•</span>
                <span><strong>Oscillator Design:</strong> Colpitts and Hartley LC oscillator configurations, phase-shift networks, and astable multivibrators.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-crimson-2 font-bold">•</span>
                <span><strong>Transistor Biasing:</strong> BJT and MOSFET DC operating point (Q-point) stabilization, current mirrors, and load-line analysis.</span>
              </li>
            </ul>
          </div>

          {/* Domain 2: VLSI & Digital */}
          <div className="rounded-2xl border border-white/10 bg-ink-2/60 p-7">
            <span className="inline-block rounded-md bg-ocean/20 px-2.5 py-1 text-xs font-bold text-[#4cc9ff]">02 · DIGITAL & SILICON</span>
            <h2 className="mt-3 font-display text-2xl text-bone sm:text-3xl">VLSI Fundamentals & HDL</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Understanding digital logic synthesis, CMOS inverter characteristics, layout rules, and hardware description modeling.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-bone/85">
              <li className="flex items-start gap-2">
                <span className="text-[#4cc9ff] font-bold">•</span>
                <span><strong>Verilog HDL:</strong> Behavioral, dataflow, and gate-level modeling of combinational and sequential digital logic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4cc9ff] font-bold">•</span>
                <span><strong>CMOS Logic:</strong> Static CMOS inverter transfer characteristics, noise margins, propagation delay, and power dissipation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4cc9ff] font-bold">•</span>
                <span><strong>Architecture:</strong> Finite state machines (FSM), registers, counters, and arithmetic logic units (ALU).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools and Simulation Environment */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">EDA Tools & Practical Environments</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-ink-2 p-5">
              <p className="font-display text-2xl text-[#ffb547]">KiCad</p>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">PCB Layout & Schematics</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/70">
                Schematic capture, footprint design, and dual-layer PCB routing. Applied in the Interactive Sound-Generating STEM Toy prototype.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-5">
              <p className="font-display text-2xl text-[#46e3a8]">LTspice</p>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">Circuit Simulation</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/70">
                Transient analysis, AC frequency sweeps, DC operating points, and op-amp/transistor circuit performance verification.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-5">
              <p className="font-display text-2xl text-[#b98bff]">Verilog</p>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">Hardware Description</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/70">
                Synthesizable digital design modules, testbench creation, timing verification, and RTL simulation.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-2 p-5">
              <p className="font-display text-2xl text-[#4cc9ff]">NI Multisim</p>
              <p className="mt-1 text-xs font-semibold uppercase text-mist">Analog SPICE Simulation</p>
              <p className="mt-2 text-xs leading-relaxed text-bone/70">
                Simulated op-amp threshold detection and light sensor integration for the Automatic Light Controller project.
              </p>
            </div>
          </div>
        </section>

        {/* Demonstrated Electronics Projects */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl text-bone sm:text-4xl">Applied Hardware & Electronics Work</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl text-bone sm:text-3xl">Interactive Sound STEM Toy PCB</h3>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-[#ffb547]">Physical KiCad PCB</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Designed a custom educational PCB in KiCad incorporating an astable analog oscillator circuit. The circuit triggers acoustic tone generation when both user touch points are contacted, demonstrating human skin conductivity and analog frequency control in a hands-on format.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-mist">
                <span className="rounded bg-white/5 px-2.5 py-1">KiCad Dual-Layer</span>
                <span className="rounded bg-white/5 px-2.5 py-1">Analog Oscillator</span>
                <span className="rounded bg-white/5 px-2.5 py-1">Touch Conductance</span>
                <span className="rounded bg-white/5 px-2.5 py-1">Hardware Prototyping</span>
              </div>
              <div className="mt-5">
                <a
                  href="https://github.com/harinivas-b/STEM-TOY-USING-KICAD"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-bone hover:text-crimson-2"
                >
                  Inspect KiCad Repository on GitHub ↗
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-2/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl text-bone sm:text-3xl">Automatic Light Controller using Op-Amp</h3>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-[#46e3a8]">Simulation & Circuit Design</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-bone/80">
                Designed and simulated an automated op-amp voltage comparator circuit in NI Multisim. The circuit compares the variable voltage output of a Light Dependent Resistor (LDR) voltage divider against an adjustable potentiometer reference threshold, driving a switching output for automated lighting control.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-mist">
                <span className="rounded bg-white/5 px-2.5 py-1">Operational Amplifier (LM741/LM358)</span>
                <span className="rounded bg-white/5 px-2.5 py-1">Voltage Comparator</span>
                <span className="rounded bg-white/5 px-2.5 py-1">LDR Sensor Interface</span>
                <span className="rounded bg-white/5 px-2.5 py-1">NI Multisim</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-ink-2 p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl text-bone">Explore All Engineering Projects</h3>
            <p className="text-xs text-mist">Review full technical stacks, repository links, and problem descriptions.</p>
          </div>
          <a href="/projects" className="rounded-md bg-crimson px-5 py-2.5 text-xs font-bold text-white hover:bg-crimson-2">
            View All Projects →
          </a>
        </div>
      </div>
    </SubpageLayout>
  );
}
