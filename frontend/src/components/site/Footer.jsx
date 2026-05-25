import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BRAND, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-black text-white border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-10 w-auto object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl tracking-wide">Epsilon</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1">Executive Education</span>
              </div>
            </div>
            <p className="mt-5 text-white/55 max-w-md leading-relaxed">
              A live executive school for decision-makers in the AI era — turning technical fluency
              into strategic value.
            </p>

            <div className="mt-7 flex items-center gap-3" data-testid="footer-social">
              {[
                { Icon: FaInstagram, href: SOCIAL.instagram, name: "instagram" },
                { Icon: FaFacebookF, href: SOCIAL.facebook, name: "facebook" },
                { Icon: FaLinkedinIn, href: SOCIAL.linkedin, name: "linkedin" },
                { Icon: FaYoutube, href: SOCIAL.youtube, name: "youtube" },
              ].map(({ Icon, href, name }) => (
                <a
                  key={name}
                  data-testid={`footer-social-${name}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-ink hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Programme</p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li><a href="#overview" className="hover:text-gold">Overview</a></li>
              <li><a href="#curriculum" className="hover:text-gold">Curriculum</a></li>
              <li><a href="#faculty" className="hover:text-gold">Faculty</a></li>
              <li><a href="#placements" className="hover:text-gold">Placements</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Resources</p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li><a href="#" className="hover:text-gold">Download brochure</a></li>
              <li><a href="#apply" className="hover:text-gold">Apply now</a></li>
              <li><a href="#advisor" className="hover:text-gold">Speak with advisor</a></li>
              <li><a href="#" className="hover:text-gold">Scholarships</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>{BRAND.email}</li>
              <li>{BRAND.phone}</li>
              <li>Mon – Sat · 10am to 8pm IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t hairline flex flex-col md:flex-row gap-3 justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} Epsilon Executive Education. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
