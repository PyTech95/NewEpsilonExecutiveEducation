export default function Stats() {
  const stats = [
    {
      figure: "91%",
      text: "of Indian leaders believe they need to adopt AI to stay competitive.",
      source: "Microsoft Work Trend Index",
    },
    {
      figure: "69%",
      text: "of skills used in most jobs in India are projected to change by 2030.",
      source: "NDTV Profit Tech",
    },
  ];
  return (
    <section data-testid="stats-section" className="bg-ink text-white border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={i}
            data-testid={`stat-card-${i}`}
            className={`py-16 md:py-24 ${i === 0 ? "md:border-r hairline md:pr-12" : "md:pl-12"} ${i === 1 ? "border-t md:border-t-0 hairline" : ""}`}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80 mb-6">
              The shift, in numbers
            </p>
            <div className="font-serif text-7xl md:text-8xl leading-none text-white">
              {s.figure}
            </div>
            <p className="mt-6 text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-md">
              {s.text}
            </p>
            <p className="mt-6 text-xs text-white/40 uppercase tracking-widest">
              Source · {s.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
