const STEPS = [
  { n: "01", t: "Brief", d: "Tell us trade, location, scope, timeline." },
  { n: "02", t: "Match", d: "We pull from our active roster of vetted Gulf Coast tradesmen." },
  { n: "03", t: "Verify", d: "Each candidate runs a qualification test against your spec." },
  { n: "04", t: "Deploy", d: "Crew on site within 72 hours of approval." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-8 border-b border-white/10 pb-10">
          <h2 className="font-display text-bone text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9]">
            From call<br />to crew.
          </h2>
          <div className="hidden font-condensed text-xs tracking-[0.3em] text-bone/50 md:block">
            / PROCESS — 72 HOURS
          </div>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-0">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-ember via-spark to-ember/30 md:block" />
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative md:px-6">
              <div className="flex items-center gap-4 md:block">
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center bg-ember text-bone font-display text-xl">
                  {s.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="md:hidden h-px flex-1 bg-white/10" />
                )}
              </div>
              <h3 className="font-display mt-6 text-bone text-3xl md:text-4xl leading-none">
                {s.t}
              </h3>
              <p className="mt-3 max-w-xs text-bone/65">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
