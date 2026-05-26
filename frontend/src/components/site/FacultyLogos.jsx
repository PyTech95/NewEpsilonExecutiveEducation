// Faculty & advisors with experience at — uniform grid
// For each brand we use a real wordmark / brand icon where available,
// otherwise a clean italic typographic treatment so every tile feels intentional.
const BRANDS = [
  { name: "NYU",                wordmark: "NYU",      sub: "New York University",        kind: "text-bold" },
  { name: "Columbia",           wordmark: "COLUMBIA", sub: "Columbia University",        kind: "text-bold" },
  { name: "UC Berkeley Law",    wordmark: "Berkeley", sub: "UC Berkeley Law",            kind: "text-bold" },
  { name: "UT Austin",          wordmark: "UT",       sub: "The University of Texas",    kind: "text-bold" },
  { name: "Fordham",            wordmark: "FORDHAM",  sub: "Fordham University",         kind: "text-bold" },
  { name: "JPMorgan Chase",    wordmark: "JPMORGAN", sub: "JPMorgan Chase",             kind: "text-bold" },
  { name: "LinkedIn",           wordmark: "in",       sub: "LinkedIn",                   kind: "text-brand", brandColor: "#0A66C2" },
  { name: "KPMG",               wordmark: "KPMG",     sub: "KPMG",                       kind: "text-brand", brandColor: "#00338D" },
  { name: "Interpublic Group",  wordmark: "IPG",      sub: "Interpublic Group",          kind: "text-bold" },
  { name: "Publicis Groupe",    wordmark: "PUBLICIS", sub: "Publicis Groupe",            kind: "text-bold" },
  { name: "Horizon Media",      wordmark: "HORIZON",  sub: "Horizon Media",              kind: "text-bold" },
  { name: "NRP Group",          wordmark: "NRP",      sub: "The NRP Group",              kind: "text-bold" },
];

export default function FacultyLogos() {
  return (
    <section
      data-testid="faculty-experience-strip"
      className="bg-navy-deep text-cream pt-10 pb-10 md:pt-12 md:pb-14 border-t border-gold/15 relative overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-25 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gold/20" />
          <p className="font-editorial italic text-gold text-center px-2 whitespace-nowrap text-sm md:text-base">
            Faculty &amp; advisors with experience at
          </p>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              data-testid={`faculty-logo-${b.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-cream hover:bg-gold transition-all border border-gold/20 hover:border-gold h-[96px] sm:h-[110px] flex flex-col items-center justify-center px-3 py-3 gap-1.5"
            >
              <div className="h-8 sm:h-10 w-full flex items-center justify-center">
                {b.icon ? (
                  <img
                    src={b.icon}
                    alt={b.name}
                    loading="lazy"
                    className="max-h-10 max-w-[70%] object-contain"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <span
                    className="font-display font-extrabold text-[clamp(15px,1.5vw,22px)] tracking-[0.04em] leading-none"
                    style={{ color: b.brandColor || "#040914" }}
                  >
                    {b.wordmark}
                  </span>
                )}
              </div>
              <span className="font-editorial italic text-[12px] sm:text-[13px] text-navy-deep/65 group-hover:text-navy-deep text-center leading-tight transition-colors">
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
