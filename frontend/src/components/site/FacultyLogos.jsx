// Faculty & advisors with experience at — real brand wordmarks via logo.dev CDN
import { logoUrl } from "@/lib/constants";

const BRANDS = [
  { name: "NYU",                domain: "nyu.edu",            sub: "New York University" },
  { name: "Columbia",           domain: "columbia.edu",       sub: "Columbia University" },
  { name: "UC Berkeley Law",    domain: "law.berkeley.edu",   sub: "UC Berkeley Law" },
  { name: "UT Austin",          local: "/assets/brands/ut-austin.png",   sub: "The University of Texas" },
  { name: "Fordham",            domain: "fordham.edu",        sub: "Fordham University" },
  { name: "JPMorgan Chase",     domain: "jpmorganchase.com",  sub: "JPMorgan Chase" },
  { name: "LinkedIn",           domain: "linkedin.com",       sub: "LinkedIn" },
  { name: "KPMG",               domain: "kpmg.com",           sub: "KPMG" },
  { name: "Interpublic Group",  local: "/assets/brands/interpublic.png", sub: "Interpublic Group" },
  { name: "Publicis Groupe",    local: "/assets/brands/publicis.png",    sub: "Publicis Groupe" },
  { name: "Horizon Media",      local: "/assets/brands/horizon.png",     sub: "Horizon Media" },
  { name: "NRP Group",          local: "/assets/brands/nrp.png",         sub: "The NRP Group" },
];

export default function FacultyLogos() {
  return (
    <section
      data-testid="faculty-experience-strip"
      className="bg-navy-deep text-cream pt-12 pb-12 md:pt-16 md:pb-16 border-t border-gold/15 relative overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-25 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gold/20" />
          <p className="font-editorial italic text-gold text-center px-3 whitespace-nowrap text-sm md:text-base">
            Faculty &amp; advisors with experience at
          </p>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {BRANDS.map((b, i) => (
            <div
              key={b.name}
              data-testid={`faculty-logo-${b.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative bg-cream hover:bg-white border border-gold/20 hover:border-gold transition-all duration-300 h-[110px] sm:h-[120px] flex flex-col items-center justify-center px-3 py-4 gap-2 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,175,55,0.18)]"
              style={{ animation: `logoFade 0.6s ease-out ${i * 0.04}s both` }}
            >
              <div className="flex-1 w-full flex items-center justify-center">
                <img
                  src={b.local || logoUrl(b.domain, 256)}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-[52px] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-editorial italic text-[11.5px] sm:text-[12.5px] text-navy-deep/55 group-hover:text-navy-deep text-center leading-tight transition-colors">
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
