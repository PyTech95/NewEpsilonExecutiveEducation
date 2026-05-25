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
    <section id="placements" data-testid="placement-section" className="bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,160,89,0.15),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Placement Outcomes</p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-4xl">
          Where graduates <em className="text-gold">go next.</em>
        </h2>
        <p className="mt-6 text-white/65 max-w-2xl text-lg font-light">
          A body of work that proves real professional growth — and opens the door to roles that sit
          closer to the decisions. Verified outcomes from past learners.
        </p>

        {/* Headline stats */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border hairline">
          {[
            { Icon: TrendingUp, value: "94%", label: "Placement assistance success rate" },
            { Icon: IndianRupee, value: "62%", label: "Average salary hike post-programme" },
            { Icon: Briefcase, value: "₹28L", label: "Highest CTC offered to alumnus" },
            { Icon: Users, value: "240+", label: "Hiring partners across sectors" },
          ].map(({ Icon, value, label }, i) => (
            <div
              key={i}
              data-testid={`placement-stat-${i}`}
              className="bg-ink hover:bg-ink-light transition-colors p-7 md:p-9"
            >
              <Icon size={22} className="text-gold mb-5" strokeWidth={1.5} />
              <div className="font-serif text-5xl md:text-6xl leading-none">{value}</div>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        {/* Role distribution + Hiring partners */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* Role distribution bar chart */}
          <div data-testid="role-distribution" className="lg:col-span-7 bg-ink-light/60 border hairline p-8 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <Award size={16} className="text-gold" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/55">Role Distribution</p>
            </div>
            <h3 className="font-serif text-3xl mb-8">Roles our alumni step into.</h3>
            <div className="space-y-5">
              {ROLE_DISTRIBUTION.map((r) => (
                <div key={r.role} data-testid={`role-bar-${r.role.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-white/85">{r.role}</span>
                    <span className="font-serif text-gold text-base">{r.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full transition-all duration-1000"
                      style={{ width: `${r.pct * 2.8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring partners */}
          <div data-testid="hiring-partners" className="lg:col-span-5 bg-ink-light/60 border hairline p-8 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <Building size={16} className="text-gold" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/55">Hiring Partners</p>
            </div>
            <h3 className="font-serif text-3xl mb-8">
              Where they're <em className="text-gold">working.</em>
            </h3>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {HIRING_PARTNERS.map((p) => (
                <div key={p} className="bg-ink-light/80 hover:bg-ink transition-colors aspect-[3/2] flex items-center justify-center px-2">
                  <span className="text-xs text-white/70 text-center font-medium">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40 italic">
              & 220+ partner organisations across product, growth, fintech, analytics and consulting.
            </p>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t hairline pt-10">
          <div>
            <p className="font-serif text-2xl md:text-3xl text-white">
              Career outcomes you can <em className="text-gold">show</em>, not just claim.
            </p>
            <p className="text-white/55 text-sm mt-2">Verified placements · Real CTC data · Cohort transparency</p>
          </div>
          <a
            href="#advisor"
            data-testid="placement-talk-btn"
            className="inline-flex items-center bg-gold hover:bg-gold-hover text-white px-7 py-4 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors"
          >
            Talk to placement team
          </a>
        </div>
      </div>
    </section>
  );
}
