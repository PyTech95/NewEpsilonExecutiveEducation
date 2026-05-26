import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BRAND, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-navy-deep text-cream border-t border-gold/15 relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-14 md:h-16 w-auto object-contain" />
            <p className="font-editorial mt-5 text-cream/65 max-w-md text-[1.05rem] leading-[1.7]">
              A live executive school for decision-makers in the AI era —
              <span className="italic text-gold"> turning technical fluency into strategic value.</span>
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
                  className="h-10 w-10 border border-gold/30 flex items-center justify-center text-cream/70 hover:text-navy-deep hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Program</p>
            <ul className="space-y-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/65">
              <li><a href="#overview" className="hover:text-gold transition-colors">Overview</a></li>
              <li><a href="#curriculum" className="hover:text-gold transition-colors">Curriculum</a></li>
              <li><a href="#faculty" className="hover:text-gold transition-colors">Faculty</a></li>
              <li><a href="#placements" className="hover:text-gold transition-colors">Placements</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Resources</p>
            <ul className="space-y-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/65">
              <li><a href="#" className="hover:text-gold transition-colors">Brochure</a></li>
              <li><a href="/apply" className="hover:text-gold transition-colors">Apply Now</a></li>
              <li><a href="#advisor" className="hover:text-gold transition-colors">Advisor Call</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Scholarships</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 font-editorial text-[0.95rem] text-cream/75">
              <li>{BRAND.email}</li>
              <li>{BRAND.phone}</li>
              <li className="font-mono uppercase text-[10.5px] tracking-[0.18em] text-cream/55">Mon – Sat · 10am – 8pm IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row gap-3 justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-cream/45">
          <span>© {new Date().getFullYear()} Epsilon Executive Education. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
