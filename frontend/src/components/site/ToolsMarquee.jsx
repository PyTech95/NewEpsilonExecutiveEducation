// Tools you'll work with — categorised editorial grid (premium aesthetic)
import { logoUrl } from "@/lib/constants";

const CATEGORIES = [
  {
    label: "Languages & IDEs",
    caption: "The working bench of every analyst",
    tools: [
      { name: "Python",   domain: "python.org" },
      { name: "R",        domain: "r-project.org" },
      { name: "Posit",    domain: "posit.co" },
      { name: "Positron", domain: "positron.posit.co" },
    ],
  },
  {
    label: "AI Co-Pilots",
    caption: "Reason, draft & defend decisions",
    tools: [
      { name: "ChatGPT", domain: "chatgpt.com" },
      { name: "Claude",  domain: "anthropic.com" },
      { name: "Gemini",  domain: "gemini.google.com" },
      { name: "Codex",   domain: "openai.com" },
    ],
  },
  {
    label: "ML & Modelling",
    caption: "From notebook to production-grade",
    tools: [
      { name: "TensorFlow",   domain: "tensorflow.org" },
      { name: "PyTorch",      domain: "pytorch.org" },
      { name: "Hugging Face", domain: "huggingface.co" },
      { name: "h2o.ai",       domain: "h2o.ai" },
    ],
  },
  {
    label: "Data & Cloud",
    caption: "Where evidence lives & ships",
    tools: [
      { name: "MongoDB",      domain: "mongodb.com" },
      { name: "Google Cloud", domain: "cloud.google.com" },
    ],
  },
];

export default function ToolsMarquee() {
  return (
    <section
      id="tools"
      data-testid="tools-section"
      className="bg-navy-deep text-cream py-16 md:py-24 border-t border-gold/15 relative overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full glow-gold opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl" data-reveal="up">
          <p className="eyebrow !text-gold">— The Working Stack —</p>
          <span className="block w-12 h-px bg-gold mt-3 mb-5" />
          <h2 className="font-editorial text-cream text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] leading-[1.05] font-semibold">
            Tools you'll work with,
            <span className="block italic text-gold font-normal">not just hear about.</span>
          </h2>
          <p className="font-editorial text-cream/85 text-[1.1rem] md:text-[1.22rem] leading-[1.65] font-medium mt-5 max-w-2xl">
            Every module is hands-on with the same tools your peers use across investment banks,
            agencies and Fortune 500 strategy teams. No simulators. No black boxes.
          </p>
        </div>

        {/* Category grid */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} data-reveal="up" className="relative">
              {/* Category header */}
              <div className="flex items-baseline justify-between border-b border-gold/20 pb-3 mb-6">
                <div>
                  <p className="font-mono uppercase text-[11px] tracking-[0.22em] text-gold font-semibold">
                    {cat.label}
                  </p>
                  <p className="font-editorial italic text-cream/55 text-[14px] mt-1.5">
                    {cat.caption}
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-cream/35">
                  {String(cat.tools.length).padStart(2, "0")}
                </span>
              </div>

              {/* Tool tiles */}
              <div className="grid grid-cols-2 gap-3">
                {cat.tools.map((t) => (
                  <div
                    key={t.name}
                    data-testid={`tool-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group relative flex items-center gap-3 bg-cream/[0.04] hover:bg-cream/[0.09] border border-gold/15 hover:border-gold/45 transition-all duration-300 px-4 py-3.5 hover:-translate-y-[2px]"
                  >
                    <span className="h-9 w-9 flex items-center justify-center bg-cream rounded-sm flex-shrink-0 overflow-hidden">
                      <img
                        src={logoUrl(t.domain, 128)}
                        alt={t.name}
                        loading="lazy"
                        className="max-h-7 max-w-7 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </span>
                    <span className="font-editorial text-[1.05rem] md:text-[1.12rem] text-cream font-medium leading-none">
                      {t.name}
                    </span>
                    {/* gold hover corner */}
                    <span className="absolute top-0 right-0 w-2 h-2 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-editorial italic text-center text-cream/50 text-[14.5px] mt-14 md:mt-16">
          And a curated rotation of niche tools introduced live, in-class, as the cohort progresses.
        </p>
      </div>
    </section>
  );
}
