export default function ChapterDivider({ chapter, eyebrow, title, accent, subtitle, align = "left", inverted = false }) {
  const isCenter = align === "center";
  const textColor = inverted ? "text-cream/35" : "text-navy/35";
  const ruleColor = inverted ? "bg-gold/60" : "bg-gold/70";
  const titleColor = inverted ? "text-cream" : "text-navy";
  const subColor = inverted ? "text-cream/65" : "text-navy/70";

  return (
    <div className={isCenter ? "text-center" : ""}>
      {chapter && (
        <p
          className={`font-mono italic ${textColor} text-[10.5px] sm:text-[11.5px] md:text-[12px] tracking-[0.28em] md:tracking-[0.32em] leading-none uppercase mb-3 md:mb-4`}
        >
          — Chapter {chapter} —
        </p>
      )}
      {eyebrow && <p className="eyebrow mb-3 md:mb-4">{eyebrow}</p>}
      <div className={isCenter ? "flex justify-center" : ""}>
        <span className={`block h-px w-24 ${ruleColor}`} />
      </div>
      {title && (
        <h2 className={`font-editorial ${titleColor} text-[2rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.06] mt-4 md:mt-6 max-w-4xl ${isCenter ? "mx-auto" : ""}`}>
          {title} {accent && <span className="italic font-editorial text-gold">{accent}</span>}
        </h2>
      )}
      {subtitle && (
        <p className={`font-editorial ${subColor} text-[1.05rem] md:text-[1.25rem] leading-relaxed mt-4 md:mt-6 max-w-3xl ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
