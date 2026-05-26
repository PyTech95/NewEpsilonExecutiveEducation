// Tools you'll work with — minimal cream-bg marquee (matches epsilonlanding.onrender.com)
import { useEffect } from "react";

// Coloured brand icons via simpleicons.org CDN — matches reference site
const TOOLS = [
  { name: "Python",        slug: "python",       color: "3776AB" },
  { name: "R",             slug: "r",            color: "276DC3" },
  { name: "ChatGPT",       slug: "openai",       color: "412991" },
  { name: "Claude",        slug: "anthropic",    color: "D97757" },
  { name: "OpenAI Codex",  slug: "openai",       color: "412991" },
  { name: "Zapier",        slug: "zapier",       color: "FF4A00" },
  { name: "Shiny",         slug: "rstudioide",   color: "75AADB" },
  { name: "Positron",      slug: "posit",        color: "447099" },
];

const iconUrl = (t) => `https://cdn.simpleicons.org/${t.slug}/${t.color}`;

export default function ToolsMarquee() {
  // Pause marquee on hover (vanilla, no extra state)
  useEffect(() => {}, []);

  // Repeat the loop twice so the seamless marquee animation works on any viewport
  const loop = [...TOOLS, ...TOOLS];

  return (
    <section
      id="tools"
      data-testid="tools-section"
      className="bg-cream text-navy-deep py-14 md:py-20 border-t border-navy-deep/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — minimal, matches reference */}
        <div className="flex items-baseline gap-3 mb-8 md:mb-10" data-reveal="up">
          <p className="font-mono uppercase text-[11.5px] md:text-[12.5px] tracking-[0.26em] text-navy-deep/55 font-semibold">
            Tools you'll work with
          </p>
          <span className="font-editorial italic text-[14px] md:text-[15px] text-navy-deep/40">
            &amp; many more
          </span>
        </div>
      </div>

      {/* Edge-to-edge marquee */}
      <div className="relative overflow-hidden" data-testid="tools-marquee">
        {/* fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="tools-track flex gap-10 md:gap-14 py-2 will-change-transform">
          {loop.concat(loop).map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              data-testid={`tool-${t.slug}-${i}`}
              className="group flex items-center gap-3 flex-shrink-0 px-2"
            >
              <span className="h-11 w-11 md:h-12 md:w-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={iconUrl(t)}
                  alt={t.name}
                  loading="lazy"
                  className="h-7 w-7 md:h-8 md:w-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
              <span className="font-editorial text-[1.18rem] md:text-[1.32rem] text-navy-deep font-medium leading-none whitespace-nowrap">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tools-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tools-track {
          animation: tools-scroll 38s linear infinite;
          width: max-content;
        }
        .tools-track:hover { animation-play-state: paused; }
        @media (max-width: 768px) {
          .tools-track { animation-duration: 28s; }
        }
      `}</style>
    </section>
  );
}
