// Tools you'll work with — moving marquee with REAL brand logos via logo.dev CDN
import { logoUrl } from "@/lib/constants";

const TOOLS = [
  { name: "Python",       domain: "python.org" },
  { name: "R",            domain: "r-project.org" },
  { name: "Posit",        domain: "posit.co" },
  { name: "Positron",     domain: "positron.posit.co" },
  { name: "ChatGPT",      domain: "chatgpt.com" },
  { name: "Claude",       domain: "anthropic.com" },
  { name: "Gemini",       domain: "gemini.google.com" },
  { name: "Codex",        domain: "openai.com" },
  { name: "h2o.ai",       domain: "h2o.ai" },
  { name: "TensorFlow",   domain: "tensorflow.org" },
  { name: "PyTorch",      domain: "pytorch.org" },
  { name: "Hugging Face", domain: "huggingface.co" },
  { name: "MongoDB",      domain: "mongodb.com" },
  { name: "Google Cloud", domain: "cloud.google.com" },
];

export default function ToolsMarquee() {
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section data-testid="tools-marquee" className="bg-navy-deep text-cream py-10 md:py-14 border-t border-gold/15 overflow-hidden relative">
      <div className="absolute inset-0 starfield opacity-25 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gold/20" />
          <p className="eyebrow text-center px-3 whitespace-nowrap !text-gold">Tools you'll work with</p>
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
        <div className="tools-track flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform py-3">
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              data-testid={i < TOOLS.length ? `tool-${t.name.toLowerCase().replace(/\s+/g, "-")}` : undefined}
              className="inline-flex items-center gap-3 flex-shrink-0 bg-cream/[0.04] hover:bg-cream/[0.09] border border-gold/15 hover:border-gold/40 transition-colors duration-300 px-4 sm:px-5 py-2.5"
            >
              <img
                src={logoUrl(t.domain, 128)}
                alt={t.name}
                loading="lazy"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-editorial text-base sm:text-lg text-cream/90">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes toolsScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .tools-track { animation: toolsScroll 22s linear infinite; }
        @media (min-width: 768px) {
          .tools-track { animation-duration: 50s; }
        }
        .tools-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .tools-track { animation: none; } }
      `}</style>
    </section>
  );
}
