import {
  SiPython, SiR, SiOpenai, SiAnthropic, SiZapier, SiPosit,
} from "react-icons/si";
import { Building2, GraduationCap, Briefcase, BarChart3, Scale, Sparkles } from "lucide-react";

const FACULTY_AT = [
  { name: "NYU", Icon: GraduationCap },
  { name: "Columbia University", Icon: GraduationCap },
  { name: "JPMorgan Chase", Icon: Building2 },
  { name: "LinkedIn", Icon: Briefcase },
  { name: "UC Berkeley Law", Icon: Scale },
  { name: "Market Theory AI", Icon: Sparkles },
  { name: "Interpublic Group", Icon: BarChart3 },
];

const TOOLS = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "R", Icon: SiR, color: "#276DC3" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
  { name: "Claude", Icon: SiAnthropic, color: "#D97757" },
  { name: "OpenAI Codex", Icon: SiOpenai, color: "#412991" },
  { name: "Zapier", Icon: SiZapier, color: "#FF4A00" },
  { name: "Positron", Icon: SiPosit, color: "#447099" },
];

export default function LogoStrips() {
  return (
    <section data-testid="logo-strips" className="bg-ink text-white pt-14 pb-20 border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty With Experience At — STATIC grid (no marquee) */}
        <div data-testid="faculty-experience-strip">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Faculty & advisors with experience at
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-8 gap-x-6 items-center">
            {FACULTY_AT.map(({ name, Icon }) => (
              <div
                key={name}
                data-testid={`faculty-logo-${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col items-center justify-center gap-2 text-center"
              >
                <Icon size={28} className="text-white/55 group-hover:text-gold transition-colors" strokeWidth={1.4} />
                <span className="text-xs text-white/55 group-hover:text-white transition-colors leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div data-testid="tools-strip" className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Tools you'll work with
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {TOOLS.map(({ name, Icon, color }) => (
              <div key={name} className="flex items-center gap-2.5 group">
                <Icon size={20} style={{ color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
            <span className="text-sm text-white/40 italic">& many more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
