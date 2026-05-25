import { Linkedin } from "lucide-react";

const KENT_IMG =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzk3MDMxNzV8MA&ixlib=rb-4.1.0&q=85";

const GUESTS = [
  {
    name: "Jayprakash Mistry",
    title: "Founder, Remarkables Capital & UnnichedHQ",
    domain: "Venture Capital · Deeptech",
    img: "https://images.pexels.com/photos/4687550/pexels-photo-4687550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logos: ["Remarkables Capital", "UnnichedHQ"],
    bio: "A decade across venture capital, private equity and credit between the US, UK and India. Focused on AI, deeptech, life sciences, fintech and defence-adjacent sectors.",
  },
  {
    name: "Philip Wiseman, J.D.",
    title: "VP Legal Affairs, JPMorgan Chase",
    domain: "Securities · Cross-border",
    img: "https://images.unsplash.com/photo-1553642618-de0381320ff3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzk3MDMxNzV8MA&ixlib=rb-4.1.0&q=85",
    logos: ["JPMorgan Chase", "UC Berkeley"],
    bio: "Business attorney with experience across banking, private equity, fund formation and cross-border transactions. Earlier at Winston & Strawn and Simpson Thacher.",
  },
  {
    name: "Alena Savera",
    title: "VP of Development, The NRP Group",
    domain: "Real Estate · Development",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzk3MDMxNzV8MA&ixlib=rb-4.1.0&q=85",
    logos: ["The NRP Group", "UT Austin"],
    bio: "Real estate development leader based in Dallas–Fort Worth. Originated multi-family projects totalling 2,350+ units. B.Arch from UT Austin.",
  },
  {
    name: "Mardoqueo Arteaga, Ph.D.",
    title: "Marketing Science Strategist, LinkedIn",
    domain: "Marketing Science · Causal Inference",
    img: "https://images.pexels.com/photos/13188831/pexels-photo-13188831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logos: ["LinkedIn", "KPMG", "Fordham"],
    bio: "Economist working at the intersection of marketing science, technology and applied research. Earlier at KPMG and Banco Central de Chile.",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" data-testid="faculty-section" className="bg-[#F8F6F1] text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-4">Faculty & Guest Lecturers</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Taught by <em className="text-gold-dark">practitioners</em>,<br className="hidden sm:block" /> not theorists.
          </h2>
        </div>

        {/* Lead faculty (Kent) */}
        <div data-testid="faculty-lead-card" className="bg-white border border-ink/10 rounded-sm overflow-hidden grid lg:grid-cols-12 gap-0 mb-16">
          <div className="lg:col-span-5 aspect-[4/5] lg:aspect-auto relative">
            <img src={KENT_IMG} alt="Kent Oliver Bhupathi" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-gold text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-semibold">
              Lead Faculty
            </div>
          </div>
          <div className="lg:col-span-7 p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-5">
              {["NYU", "Columbia", "Market Theory AI", "ex-Interpublic"].map((l) => (
                <span key={l} className="text-[10px] uppercase tracking-wider border border-ink/15 px-2.5 py-1 text-ink/70">
                  {l}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-4xl md:text-5xl mb-2">Kent Oliver Bhupathi</h3>
            <p className="text-ink/60 mb-6 italic">Founder & Lead Instructor · Epsilon Executive Education</p>
            <div className="space-y-4 text-ink/75 leading-relaxed text-sm md:text-base">
              <p>
                Economist, data science leader and educator with 15+ years across applied research
                and analytics — spanning marketing sciences, healthcare analytics, supply chain,
                business intelligence and professional services.
              </p>
              <p>
                He holds a dual degree in Economics and Architecture from UT Austin and a Master's
                in Applied Econometrics from NYU. Prior teaching appointments include NYU, Columbia
                University and the Indian School of Public Policy (ISPP).
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-gold-dark text-sm">
              <Linkedin size={14} /> View profile
            </div>
          </div>
        </div>

        {/* Guest lecturers - STATIC GRID (no carousel) */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-dark mb-6">Guest Lecturers</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUESTS.map((g, i) => (
            <article
              key={g.name}
              data-testid={`guest-faculty-${i}`}
              className="group bg-white border border-ink/10 rounded-sm overflow-hidden hover:border-gold/60 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gold-dark mb-1">{g.domain}</p>
                <h4 className="font-serif text-xl leading-tight">{g.name}</h4>
                <p className="text-xs text-ink/55 mt-1.5">{g.title}</p>
                <p className="mt-3 text-xs text-ink/70 leading-relaxed line-clamp-3">{g.bio}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.logos.map((l) => (
                    <span key={l} className="text-[10px] border border-ink/15 px-2 py-0.5 text-ink/60">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
