import { TrendingUp, Briefcase } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      Icon: TrendingUp,
      figure: "91%",
      eyebrow: "Leadership conviction",
      text: "of Indian leaders believe they need to adopt AI to stay competitive.",
      source: "Microsoft Work Trend Index",
    },
    {
      Icon: Briefcase,
      figure: "69%",
      eyebrow: "Skill churn",
      text: "of skills used in most jobs in India are projected to change by 2030.",
      source: "NDTV Profit Tech",
    },
  ];
  return (
    <section data-testid="stats-section" className="relative bg-navy-deep text-cream border-t border-gold/15 overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — formatted to match FacultyLogos style */}
        <div className="flex items-center gap-4 mb-10" data-reveal>
          <div className="h-px flex-1 bg-gold/20" />
          <p className="font-editorial italic text-gold text-center px-3 whitespace-nowrap text-sm md:text-base">
            The shift, in numbers
          </p>
          <div className="h-px flex-1 bg-gold/20" />
        </div>

        <div className="grid md:grid-cols-2">
          {stats.map((s, i) => (
            <div
              key={i}
              data-testid={`stat-card-${i}`}
              data-reveal
              data-reveal-delay={i === 0 ? "0" : "150"}
              className={`py-10 md:py-12 ${i === 0 ? "md:border-r md:border-gold/15 md:pr-12" : "md:pl-12"} ${i === 1 ? "border-t border-gold/15 md:border-t-0" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center h-10 w-10 bg-gold/10 border border-gold/40">
                  <s.Icon size={18} className="text-gold" strokeWidth={1.6} />
                </span>
                <p className="eyebrow !mb-0">{s.eyebrow}</p>
              </div>
              <div className="font-editorial text-6xl md:text-8xl leading-none text-cream">
                {s.figure}
              </div>
              <p className="mt-6 font-editorial text-lg md:text-xl text-cream/80 leading-relaxed max-w-md">
                {s.text}
              </p>
              <p className="mt-6 font-mono uppercase text-[10px] tracking-[0.22em] text-cream/45">
                Source · {s.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
