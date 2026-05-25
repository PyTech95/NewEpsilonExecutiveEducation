import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BRAND, SOCIAL } from "@/lib/constants";

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "Placements", href: "#placements" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      data-testid="site-navbar"
      className="fixed top-0 left-0 right-0 z-40 bg-ink/85 backdrop-blur-md border-b hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a href="#top" data-testid="nav-brand" className="flex items-center gap-3 group">
            <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-9 md:h-11 w-auto object-contain" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-xl tracking-wide text-white">Epsilon</span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-white/45 mt-0.5">Executive Education</span>
            </span>
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Right - social + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-3 pr-4 border-r hairline">
              <a data-testid="nav-social-instagram" href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors"><FaInstagram size={14}/></a>
              <a data-testid="nav-social-facebook" href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors"><FaFacebookF size={14}/></a>
              <a data-testid="nav-social-linkedin" href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors"><FaLinkedinIn size={14}/></a>
              <a data-testid="nav-social-youtube" href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors"><FaYoutube size={14}/></a>
            </div>
            <a
              href="#apply"
              data-testid="nav-apply-btn"
              className="text-sm bg-gold hover:bg-gold-hover text-white px-5 py-2.5 rounded-sm font-medium tracking-wide transition-colors"
            >
              Apply now
            </a>
          </div>

          {/* Tablet-only condensed: just Apply CTA */}
          <a
            href="#apply"
            className="hidden md:inline-flex lg:hidden text-sm bg-gold hover:bg-gold-hover text-white px-5 py-2.5 rounded-sm font-medium tracking-wide transition-colors"
            data-testid="nav-apply-btn-tablet"
          >
            Apply now
          </a>

          {/* Mobile/tablet toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile / tablet menu */}
        {open && (
          <div data-testid="mobile-menu" className="lg:hidden pb-6 pt-2 space-y-4 border-t hairline animate-fade-in">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-gold text-base"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="block bg-gold text-white text-center px-5 py-3 rounded-sm font-medium"
            >
              Apply now
            </a>
            <div className="flex items-center gap-5 pt-2">
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="text-white/70"><FaInstagram size={18}/></a>
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="text-white/70"><FaFacebookF size={18}/></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="text-white/70"><FaLinkedinIn size={18}/></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="text-white/70"><FaYoutube size={18}/></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
