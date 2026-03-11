interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-4 mb-5 ${centered ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-[#c9a84c] shrink-0" />
          <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">
            {eyebrow}
          </span>
          {centered && <div className="h-px w-8 bg-[#c9a84c] shrink-0" />}
        </div>
      )}
      <h2
        className="text-3xl md:text-5xl font-bold leading-tight text-[var(--tx)]"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {title}
        {titleItalic && (
          <span className="text-[#c9a84c] italic"> {titleItalic}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed max-w-lg text-[var(--dim)] ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
