import portrait from "@/assets/testimonial-worker.jpg";

export function Testimonial() {
  return (
    <section className="relative bg-ash py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={portrait}
                alt="Texas pipe welder on site"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="font-condensed text-xs tracking-[0.25em] text-spark">
                  / FIELD REPORT
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-center md:col-span-7">
            <div className="font-display text-ember text-7xl leading-none">&ldquo;</div>
            <blockquote className="font-display mt-2 text-bone text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.02]">
              Onfire's welders showed up qualified on day one. We didn't lose a single
              hour to retests. <span className="text-spark">That's the standard.</span>
            </blockquote>
            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="font-condensed text-bone tracking-[0.15em]">
                Marcus R.
              </div>
              <div className="mt-1 text-sm text-bone/60">
                Project Superintendent · Beaumont Refinery Turnaround
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
