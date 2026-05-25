import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SOCIAL } from "@/lib/constants";

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "Placements", href: "#placements" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="site-navbar"
      className={`fixed top-[34px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28 lg:h-32">
          {/* Brand */}
          <a href="#top" data-testid="nav-brand" className="flex items-center group">
            <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-16 md:h-24 lg:h-28 w-auto object-contain" />
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase()}`}
                className="font-editorial text-[16px] text-cream/80 hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Right - social + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-3 pr-4 border-r border-cream/15">
              <a data-testid="nav-social-instagram" href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="text-cream/55 hover:text-gold transition-colors"><FaInstagram size={13}/></a>
              <a data-testid="nav-social-facebook" href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="text-cream/55 hover:text-gold transition-colors"><FaFacebookF size={13}/></a>
              <a data-testid="nav-social-linkedin" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-cream/55 hover:text-gold transition-colors"><FaLinkedinIn size={13}/></a>
              <a data-testid="nav-social-youtube" href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="text-cream/55 hover:text-gold transition-colors"><FaYoutube size={13}/></a>
            </div>
            <a href="/apply" data-testid="nav-apply-btn" className="btn-gold !py-3 !px-5 !text-[10.5px]">
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
            <div className="flex items-center gap-5 pt-2">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="text-cream/70"><FaInstagram size={16}/></a>
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="text-cream/70"><FaFacebookF size={16}/></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-cream/70"><FaLinkedinIn size={16}/></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="text-cream/70"><FaYoutube size={16}/></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
