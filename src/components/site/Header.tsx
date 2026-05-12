import { useEffect, useState } from "react";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Trades", href: "#trades" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="font-display text-3xl md:text-4xl tracking-wide text-bone">
          ON<span className="text-ember">FIRE</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-condensed text-sm text-bone/80 transition hover:text-ember"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-condensed group inline-flex items-center gap-2 bg-ember px-4 py-2.5 text-xs md:text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-ember/90 md:px-5 md:py-3"
        >
          Request Crew
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
