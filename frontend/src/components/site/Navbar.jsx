import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "Curriculum", href: "#curriculum", id: "curriculum" },
  { label: "Faculty", href: "#faculty", id: "faculty" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Determine active section by which is closest to top of viewport
      let current = "";
      const offset = 140;
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= offset) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="site-navbar"
      className={`fixed top-[34px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/92 backdrop-blur-lg border-b border-gold/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24 lg:h-24"}`}>
          {/* Brand */}
          <a href="#top" data-testid="nav-brand" className="flex items-center group">
            <img
              src="/assets/logo.png"
              alt="Epsilon Executive Education"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10 md:h-12 lg:h-14" : "h-12 md:h-16 lg:h-20"}`}
            />
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-9">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase()}`}
                className={`nav-link font-editorial text-[15.5px] text-cream/80 hover:text-gold ${active === n.id ? "is-active" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Right - CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#advisor" data-testid="nav-advisor-btn" className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/85 hover:text-gold transition-colors font-semibold">
              Talk to Advisor
            </a>
            <a href="/apply" data-testid="nav-apply-btn" className="btn-gold !py-2.5 !px-5 !text-[11px] !tracking-[0.18em]">
              Apply Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cream p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div data-testid="mobile-menu" className="lg:hidden pb-6 pt-2 space-y-4 border-t border-cream/10 bg-navy-deep/95 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6 fade-up">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-[12px] uppercase tracking-[0.2em] text-cream/80 hover:text-gold py-2"
              >
                {n.label}
              </a>
            ))}
            <a href="/apply" onClick={() => setOpen(false)} className="btn-gold w-full justify-center !text-[11px]">
              Apply Now
            </a>
            <a href="#advisor" onClick={() => setOpen(false)} className="block font-mono text-[12px] uppercase tracking-[0.2em] text-cream/85 hover:text-gold py-2 text-center font-semibold">
              Talk to Advisor
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
