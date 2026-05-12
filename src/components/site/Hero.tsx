import heroImg from "@/assets/hero-welder.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      <img
        src={heroImg}
        alt="Pipe welder mid-arc at a Gulf Coast refinery"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
      />
      {/* heavy overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-transparent to-charcoal" />

      {/* edge tag */}
      <div className="pointer-events-none absolute left-6 top-28 hidden md:block md:left-10">
        <div className="flex items-center gap-3 font-condensed text-xs tracking-[0.3em] text-bone/60">
          <span className="h-px w-10 bg-ember" />
          EST. TEXAS · GULF COAST
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <h1 className="font-display max-w-[60ch] text-bone text-[clamp(2.75rem,9vw,9rem)] leading-[0.88] tracking-tight">
          <span className="block">Pipe &amp; Structural</span>
          <span className="block">
            Craft. <span className="text-ember">Built</span>
          </span>
          <span className="block">For Texas Work.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base text-bone/75 md:text-lg">
          Onfire deploys vetted pipe welders, pipe fitters, and structural fitters to
          refineries, petrochem plants, and oilfield projects across the Gulf Coast.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="font-condensed group inline-flex items-center gap-3 bg-ember px-7 py-4 text-sm font-semibold text-white transition hover:bg-ember/90"
          >
            Request Crew
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#join"
            className="font-condensed group inline-flex items-center gap-3 border border-bone/40 px-7 py-4 text-sm font-semibold text-bone transition hover:border-spark hover:text-spark"
          >
            Join The Crew
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 right-6 hidden flex-col items-end gap-2 font-condensed text-[10px] tracking-[0.4em] text-bone/50 md:flex md:right-10">
        SCROLL
        <span className="h-10 w-px bg-bone/30" />
      </div>
    </section>
  );
}
