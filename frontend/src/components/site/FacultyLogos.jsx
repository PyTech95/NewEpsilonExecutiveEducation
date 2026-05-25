// Faculty & advisors with experience at — STATIC grid with REAL brand logos
const BRANDS = [
  { name: "NYU", logo: "https://logo.clearbit.com/nyu.edu" },
  { name: "Columbia University", logo: "https://logo.clearbit.com/columbia.edu" },
  { name: "JPMorgan Chase", logo: "https://logo.clearbit.com/jpmorganchase.com" },
  { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "UC Berkeley Law", logo: "https://logo.clearbit.com/law.berkeley.edu" },
  { name: "Market Theory AI", logo: "https://logo.clearbit.com/markettheory.ai" },
  { name: "Interpublic Group", logo: "https://logo.clearbit.com/interpublic.com" },
];

export default function FacultyLogos() {
  return (
    <section data-testid="faculty-experience-strip" className="bg-ink text-white pt-12 pb-12 md:pt-16 md:pb-16 border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50 text-center px-2">
            Faculty & advisors with experience at
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              data-testid={`faculty-logo-${b.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white hover:bg-gold/95 border border-white/10 hover:border-gold transition-all rounded-sm aspect-[5/3] flex flex-col items-center justify-center p-4 gap-2"
            >
              <div className="h-9 sm:h-10 w-full flex items-center justify-center">
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const fallback = document.createElement('span');
                    fallback.className = 'font-serif text-base text-ink/80';
                    fallback.textContent = b.name;
                    e.currentTarget.replaceWith(fallback);
                  }}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-ink/60 group-hover:text-ink text-center leading-tight transition-colors uppercase tracking-wider font-medium">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
