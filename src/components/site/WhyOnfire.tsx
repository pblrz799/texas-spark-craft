import { Flame, MapPin, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    Icon: Flame,
    title: "Trades-Led Leadership",
    body: "Onfire was built by people who've held a stinger. We know what a real welder looks like — and what a fake one looks like, too.",
  },
  {
    Icon: MapPin,
    title: "Gulf Coast Focused",
    body: "We staff projects from Corpus Christi to Beaumont. Our crews live here, work here, and stay here.",
  },
  {
    Icon: ShieldCheck,
    title: "Qualification-Tested",
    body: "Every welder runs a coupon before they hit your job. Every fitter shows their work before they show up. No surprises on day one.",
  },
];

export function WhyOnfire() {
  return (
    <section id="work" className="relative bg-ash py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 pb-10">
          <div className="col-span-12 md:col-span-3">
            <div className="font-condensed text-xs tracking-[0.3em] text-spark">
              / WHY ONFIRE
            </div>
          </div>
          <h2 className="font-display col-span-12 md:col-span-9 text-bone text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95]">
            We don't sell resumes. We send tradesmen who can do the work the first time.
          </h2>
        </div>

        <div className="mt-4 divide-y divide-white/10">
          {ITEMS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="grid grid-cols-12 items-center gap-6 py-10 md:gap-12 md:py-14"
            >
              <div className="col-span-12 md:col-span-2">
                <div className="flex h-20 w-20 items-center justify-center border border-ember/60 text-ember">
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h3 className="font-display text-bone text-3xl md:text-5xl leading-none">
                  {title}
                </h3>
                <p className="mt-3 max-w-3xl text-bone/70 md:text-lg">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
