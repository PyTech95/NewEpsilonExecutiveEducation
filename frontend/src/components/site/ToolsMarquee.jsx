// Tools you'll work with — MOVING marquee with real brand logos (simpleicons CDN)
const TOOLS = [
  { name: "Python",    logo: "https://cdn.simpleicons.org/python/C5A059" },
  { name: "R",         logo: "https://cdn.simpleicons.org/r/C5A059" },
  { name: "ChatGPT",   logo: "https://cdn.simpleicons.org/openai/C5A059" },
  { name: "Claude",    logo: "https://cdn.simpleicons.org/anthropic/C5A059" },
  { name: "Jupyter",   logo: "https://cdn.simpleicons.org/jupyter/C5A059" },
  { name: "Zapier",    logo: "https://cdn.simpleicons.org/zapier/C5A059" },
  { name: "Tableau",   logo: "https://cdn.simpleicons.org/tableau/C5A059" },
  { name: "Power BI",  logo: "https://cdn.simpleicons.org/powerbi/C5A059" },
  { name: "GitHub",    logo: "https://cdn.simpleicons.org/github/C5A059" },
  { name: "Pandas",    logo: "https://cdn.simpleicons.org/pandas/C5A059" },
  { name: "Posit",     logo: "https://cdn.simpleicons.org/posit/C5A059" },
  { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit/C5A059" },
];

export default function ToolsMarquee() {
  // Duplicate the array so the loop appears seamless
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section data-testid="tools-marquee" className="bg-ink text-white py-14 md:py-20 border-t hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gold/80 text-center px-2 whitespace-nowrap">
            Tools you'll work with
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Marquee track */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="tools-track flex items-center gap-10 sm:gap-16 whitespace-nowrap will-change-transform py-2">
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              data-testid={i < TOOLS.length ? `tool-${t.name.toLowerCase().replace(/\s+/g, "-")}` : undefined}
              className="inline-flex items-center gap-3 flex-shrink-0"
            >
              <img
                src={t.logo}
                alt={t.name}
                loading="lazy"
                className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-serif text-xl sm:text-2xl text-white/85">{t.name}</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/40 ml-5 sm:ml-9" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes toolsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tools-track {
          animation: toolsScroll 45s linear infinite;
        }
        .tools-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .tools-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
