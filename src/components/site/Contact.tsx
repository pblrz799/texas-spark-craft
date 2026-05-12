const FORM_ENDPOINT_CLIENT = "https://formsubmit.co/PLACEHOLDER_EMAIL";
const FORM_ENDPOINT_WORKER = "https://formsubmit.co/PLACEHOLDER_EMAIL";

const inputCls =
  "w-full bg-transparent border-b border-white/20 px-0 py-3 text-bone placeholder:text-bone/40 focus:border-current focus:outline-none transition";
const labelCls = "font-condensed text-[11px] tracking-[0.25em] text-bone/60";

export function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        {/* CLIENT FORM */}
        <form
          action={FORM_ENDPOINT_CLIENT}
          method="POST"
          className="relative border-b border-white/10 px-6 py-20 md:px-12 md:py-24 lg:border-b-0 lg:border-r"
        >
          <input type="hidden" name="_subject" value="New crew request — Onfire site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="font-condensed text-xs tracking-[0.3em] text-ember">
            / FOR CLIENTS
          </div>
          <h2 className="font-display mt-4 text-bone text-5xl md:text-7xl leading-[0.9]">
            Need <span className="text-ember">A&nbsp;Crew?</span>
          </h2>
          <p className="mt-4 max-w-md text-bone/70">
            Tell us the work. We'll bring the trades.
          </p>

          <div className="mt-12 space-y-7 text-ember">
            <Field label="Full Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Project Location / City in TX" name="location" required />

            <div>
              <div className={labelCls}>Trades Needed</div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {["Pipe Welder", "Pipe Fitter", "Structural Fitter"].map((t) => (
                  <label
                    key={t}
                    className="flex cursor-pointer items-center gap-3 border border-white/15 px-4 py-3 text-bone transition hover:border-ember"
                  >
                    <input
                      type="checkbox"
                      name="trades_needed"
                      value={t}
                      className="h-4 w-4 accent-ember"
                    />
                    <span className="font-condensed text-xs tracking-[0.15em]">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="project_details">
                Project Details
              </label>
              <textarea
                id="project_details"
                name="project_details"
                rows={4}
                placeholder="Scope, timeline, headcount…"
                className={inputCls + " resize-none"}
              />
            </div>
          </div>

          <button
            type="submit"
            className="font-condensed group mt-10 inline-flex items-center gap-3 bg-ember px-8 py-4 text-sm font-semibold text-white transition hover:bg-ember/90"
          >
            Request Crew
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </button>
        </form>

        {/* WORKER FORM */}
        <form
          id="join"
          action={FORM_ENDPOINT_WORKER}
          method="POST"
          className="relative bg-[oklch(0.18_0_0)] px-6 py-20 md:px-12 md:py-24"
        >
          <input type="hidden" name="_subject" value="New crew application — Onfire site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="font-condensed text-xs tracking-[0.3em] text-spark">
            / FOR TRADESMEN
          </div>
          <h2 className="font-display mt-4 text-bone text-5xl md:text-7xl leading-[0.9]">
            Join <span className="text-spark">The&nbsp;Crew</span>
          </h2>
          <p className="mt-4 max-w-md text-bone/70">
            Texas tradesmen. Steady work. Real pay.
          </p>

          <div className="mt-12 space-y-7 text-spark">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />

            <div>
              <label className={labelCls} htmlFor="primary_trade">
                Primary Trade
              </label>
              <select
                id="primary_trade"
                name="primary_trade"
                required
                className={inputCls + " appearance-none bg-[oklch(0.18_0_0)]"}
              >
                <option value="">Select a trade…</option>
                <option>Pipe Welder</option>
                <option>Pipe Fitter</option>
                <option>Structural Fitter</option>
                <option>Other</option>
              </select>
            </div>

            <Field
              label="Certifications / Tests Passed"
              name="certifications"
              placeholder="e.g. 6G GTAW, B31.3, 2G SMAW"
            />
            <Field label="Years of Experience" name="years" type="number" min={0} />
            <Field label="Current City in TX" name="city" />
          </div>

          <button
            type="submit"
            className="font-condensed group mt-10 inline-flex items-center gap-3 bg-spark px-8 py-4 text-sm font-semibold text-charcoal transition hover:bg-spark/90"
          >
            Apply Now
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="font-condensed text-[11px] tracking-[0.25em] text-bone/60">
        {label} {required && <span className="text-current">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-bone placeholder:text-bone/40 focus:border-current focus:outline-none transition"
      />
    </div>
  );
}
