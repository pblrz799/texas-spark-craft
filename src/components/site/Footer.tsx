export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-4xl text-bone">
            ON<span className="text-ember">FIRE</span>
          </div>
          <p className="font-condensed mt-3 text-xs tracking-[0.25em] text-bone/60">
            Pipe &amp; Structural Craft. Texas-Built.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 md:items-center md:justify-self-center">
          {[
            { l: "Work", h: "#work" },
            { l: "Trades", h: "#trades" },
            { l: "Process", h: "#process" },
            { l: "Contact", h: "#contact" },
            { l: "Join The Crew", h: "#join" },
          ].map((n) => (
            <a
              key={n.l}
              href={n.h}
              className="font-condensed text-sm tracking-[0.15em] text-bone/80 hover:text-ember"
            >
              {n.l}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-bone/70 md:justify-self-end md:text-right">
          <div>[PLACEHOLDER TX ADDRESS]</div>
          <div>Houston, TX</div>
          <a href="tel:+18320000000" className="block hover:text-spark">
            [PLACEHOLDER 832 NUMBER]
          </a>
          <a href="mailto:info@onfirestaffing.com" className="block hover:text-spark">
            info@onfirestaffing.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-bone/50 md:flex-row md:items-center md:px-10">
          <div>© 2026 Onfire Staffing &amp; Trades LLC. All rights reserved.</div>
          <div className="font-condensed tracking-[0.3em]">EST. TEXAS</div>
        </div>
      </div>
    </footer>
  );
}
