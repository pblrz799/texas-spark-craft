import welder from "@/assets/trade-pipe-welder.jpg";
import fitter from "@/assets/trade-pipe-fitter.jpg";
import structural from "@/assets/trade-structural.jpg";

const TRADES = [
  {
    num: "01",
    title: "Pipe Welders",
    body: "Certified for 6G, B31.3, and X-ray quality on process piping. GTAW, SMAW, and FCAW capable. Refinery and petrochem ready.",
    img: welder,
  },
  {
    num: "02",
    title: "Pipe Fitters",
    body: "Skilled in spool fabrication, alignment, and installation on large-bore process systems. ASME B31 code-compliant.",
    img: fitter,
  },
  {
    num: "03",
    title: "Structural Fitters",
    body: "Heavy structural steel fitting and tacking for modules, racks, and skids in industrial construction.",
    img: structural,
  },
];

export function Trades() {
  return (
    <section id="trades" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-8 border-b border-white/10 pb-10">
          <h2 className="font-display max-w-3xl text-bone text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9]">
            The Trades<br />We Staff
          </h2>
          <div className="hidden font-condensed text-xs tracking-[0.3em] text-bone/50 md:block">
            / SECTION 02
          </div>
        </div>

        <div className="divide-y divide-white/10">
          {TRADES.map((t) => (
            <article
              key={t.num}
              className="group grid grid-cols-12 items-center gap-6 py-10 md:gap-12 md:py-16"
            >
              <div className="col-span-12 md:col-span-2">
                <div className="font-display text-ember text-6xl md:text-8xl leading-none transition group-hover:translate-x-2">
                  {t.num}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-bone text-4xl md:text-6xl leading-none">
                  {t.title}
                </h3>
                <p className="mt-4 max-w-xl text-bone/70 md:text-lg">{t.body}</p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-charcoal/60 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
