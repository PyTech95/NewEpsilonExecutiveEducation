import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-navy-deep text-cream border-t border-gold/15 relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <img src="/assets/logo.png" alt="Epsilon Executive Education" className="h-14 md:h-16 w-auto object-contain" />
            <p className="font-editorial mt-5 text-cream/75 max-w-md text-[1.15rem] leading-[1.65]">
              A live, 12-week online program in <span className="italic text-gold">Applied AI &amp; Machine Learning</span> — built for working professionals advancing their careers.
            </p>

            <div className="mt-7 flex flex-wrap gap-3" data-testid="footer-ctas">
              <a href="/apply" className="btn-gold !py-2.5 !px-5 !text-[12px] !tracking-[0.18em]">
                Apply Now
              </a>
              <a href="#advisor" className="btn-outline-gold !py-2.5 !px-5 !text-[12px] !tracking-[0.18em]">
                Talk to an Advisor
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Program</p>
            <ul className="space-y-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/65">
              <li><a href="#overview" className="hover:text-gold transition-colors">Overview</a></li>
              <li><a href="#curriculum" className="hover:text-gold transition-colors">Curriculum</a></li>
              <li><a href="#faculty" className="hover:text-gold transition-colors">Faculty</a></li>
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
