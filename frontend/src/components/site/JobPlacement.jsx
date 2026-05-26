import { TrendingUp, IndianRupee, Briefcase, Building, Award, Users } from "lucide-react";

const HIRING_PARTNERS = [
  "Microsoft", "JPMorgan", "Deloitte", "Accenture", "TCS", "Razorpay",
  "Swiggy", "Flipkart", "Zomato", "PhonePe", "Paytm", "LinkedIn",
];

const ROLE_DISTRIBUTION = [
  { role: "Product Manager", pct: 28 },
  { role: "Growth / Marketing Manager", pct: 22 },
  { role: "Director of Analytics", pct: 18 },
  { role: "RevOps Manager", pct: 14 },
  { role: "FP&A Manager", pct: 12 },
  { role: "AI Support Technician", pct: 6 },
];

export default function JobPlacement() {
  return (
    <section id="placements" data-testid="placement-section" className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full glow-gold pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <p className="eyebrow mb-3">Placement Outcomes</p>
        <span className="gold-rule-lg block mb-6" />
        <h2 className="font-editorial text-cream text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.06] max-w-4xl">
          Where graduates <span className="italic text-gold">go next.</span>
        </h2>
        <p className="mt-6 font-editorial text-cream/75 max-w-2xl text-[1.1rem] leading-relaxed">
          A body of work that proves real professional growth — and opens the door to roles that sit
          closer to the decisions. Verified outcomes from past learners.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 border border-gold/15">
          {[
            { Icon: TrendingUp, value: "94%", label: "Placement assistance success rate" },
            { Icon: IndianRupee, value: "62%", label: "Average salary hike post-program" },
            { Icon: Briefcase, value: "₹28L", label: "Highest CTC offered to alumnus" },
            { Icon: Users, value: "240+", label: "Hiring partners across sectors" },
          ].map(({ Icon, value, label }, i) => (
            <div
              key={i}
              data-testid={`placement-stat-${i}`}
              className="bg-navy-deep hover:bg-navy transition-colors p-6 md:p-8"
            >
              <Icon size={20} className="text-gold mb-4" strokeWidth={1.4} />
              <div className="font-editorial text-[2.5rem] md:text-[3.4rem] leading-none text-cream">{value}</div>
              <p className="mt-3 font-mono uppercase text-[10px] tracking-[0.18em] text-cream/65 leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div data-testid="role-distribution" className="lg:col-span-7 bg-navy/60 border border-gold/15 p-6 md:p-9">
            <div className="flex items-center gap-3 mb-2">
              <Award size={16} className="text-gold" />
              <p className="eyebrow">Role Distribution</p>
            </div>
            <h3 className="font-editorial text-[1.85rem] mb-8 text-cream">Roles our alumni step into.</h3>
            <div className="space-y-5">
              {ROLE_DISTRIBUTION.map((r) => (
                <div key={r.role} data-testid={`role-bar-${r.role.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-cream/85 font-editorial">{r.role}</span>
                    <span className="font-editorial italic text-gold">{r.pct}%</span>
                  </div>
                  <div className="h-1 bg-cream/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-dark to-gold transition-all duration-1000"
                      style={{ width: `${r.pct * 2.8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-testid="hiring-partners" className="lg:col-span-5 bg-navy/60 border border-gold/15 p-6 md:p-9">
            <div className="flex items-center gap-3 mb-2">
              <Building size={16} className="text-gold" />
              <p className="eyebrow">Hiring Partners</p>
            </div>
            <h3 className="font-editorial text-[1.85rem] mb-8 text-cream">
              Where they're <span className="italic text-gold">working.</span>
            </h3>
            <div className="grid grid-cols-3 gap-px bg-gold/15">
              {HIRING_PARTNERS.map((p) => (
                <div key={p} className="bg-navy hover:bg-navy-deep transition-colors aspect-[3/2] flex items-center justify-center px-2">
                  <span className="font-mono uppercase text-[9px] tracking-[0.15em] text-cream/70 text-center">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 font-editorial italic text-xs text-cream/50">
              & 220+ partner organisations across product, growth, fintech, analytics and consulting.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-gold/15 pt-8">
          <div>
            <p className="font-editorial text-[1.7rem] md:text-[2.1rem] text-cream leading-tight">
              Career outcomes you can <span className="italic text-gold">show</span>, not just claim.
            </p>
            <p className="font-mono uppercase text-[10px] tracking-[0.18em] text-cream/55 mt-3">Verified placements · Real CTC data · Cohort transparency</p>
          </div>
          <a
            href="#advisor"
            data-testid="placement-talk-btn"
            className="btn-gold flex-shrink-0"
          >
            Talk to placement team
          </a>
        </div>
      </div>
    </section>
  );
}
