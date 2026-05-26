// Tools you'll work with — MOVING marquee with real brand logos (simpleicons CDN)
const COLOR = "D4AF37";
const TOOLS = [
  { name: "Python",    logo: `https://cdn.simpleicons.org/python/${COLOR}` },
  { name: "R",         logo: `https://cdn.simpleicons.org/r/${COLOR}` },
  { name: "ChatGPT",   logo: `https://cdn.simpleicons.org/openai/${COLOR}` },
  { name: "Claude",    logo: `https://cdn.simpleicons.org/anthropic/${COLOR}` },
  { name: "Jupyter",   logo: `https://cdn.simpleicons.org/jupyter/${COLOR}` },
  { name: "Zapier",    logo: `https://cdn.simpleicons.org/zapier/${COLOR}` },
  { name: "Tableau",   logo: `https://cdn.simpleicons.org/tableau/${COLOR}` },
  { name: "Power BI",  logo: `https://cdn.simpleicons.org/powerbi/${COLOR}` },
  { name: "GitHub",    logo: `https://cdn.simpleicons.org/github/${COLOR}` },
  { name: "Pandas",    logo: `https://cdn.simpleicons.org/pandas/${COLOR}` },
  { name: "Posit",     logo: `https://cdn.simpleicons.org/posit/${COLOR}` },
  { name: "Streamlit", logo: `https://cdn.simpleicons.org/streamlit/${COLOR}` },
];

export default function ToolsMarquee() {
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section data-testid="tools-marquee" className="bg-navy-deep text-cream py-10 md:py-14 border-t border-gold/15 overflow-hidden relative">
      <div className="absolute inset-0 starfield opacity-25 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gold/20" />
          <p className="eyebrow text-center px-2 whitespace-nowrap !text-gold">Tools you'll work with</p>
          <div className="h-px flex-1 bg-gold/20" />
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
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
              <span className="font-editorial text-xl sm:text-2xl text-cream/85">{t.name}</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/40 ml-5 sm:ml-9" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes toolsScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .tools-track { animation: toolsScroll 22s linear infinite; }
        @media (min-width: 768px) {
          .tools-track { animation-duration: 45s; }
        }
        .tools-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .tools-track { animation: none; } }
      `}</style>
    </section>
  );
}
