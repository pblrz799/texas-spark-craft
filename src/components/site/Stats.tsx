const STATS = [
  { n: "200+", label: "Active Tradesmen" },
  { n: "15+", label: "Gulf Coast Job Sites" },
  { n: "98%", label: "Project Completion Rate" },
  { n: "24h", label: "Crew Response Time" },
];

export function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-charcoal">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`relative px-6 py-12 md:px-10 md:py-16 ${
              i > 0 ? "md:border-l border-white/5" : ""
            } ${i === 1 ? "border-l border-white/5" : ""} ${
              i >= 2 ? "border-t md:border-t-0 border-white/5" : ""
            }`}
          >
            <div className="font-display text-spark text-[clamp(3rem,7vw,6.5rem)] leading-none">
              {s.n}
            </div>
            <div className="font-condensed mt-3 text-xs tracking-[0.2em] text-bone/70 md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
