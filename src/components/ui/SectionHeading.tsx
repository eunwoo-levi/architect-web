import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  divider?: "line" | "ornament";
  size?: "md" | "lg";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  divider = "line",
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  const eyebrowColor = tone === "dark" ? "text-accent-light" : "text-accent";
  const titleColor = tone === "dark" ? "text-white" : "text-stone-900";
  const descriptionColor = tone === "dark" ? "text-stone-400" : "text-stone-500";
  const titleSize =
    size === "lg"
      ? "text-3xl md:text-4xl lg:text-5xl"
      : "text-3xl md:text-4xl";
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <span
        className={`text-[11px] tracking-[0.28em] font-medium uppercase ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-serif font-bold leading-tight tracking-tight ${titleSize} ${titleColor}`}
      >
        {title}
      </h2>

      {divider === "line" ? (
        <div
          className={`mt-5 h-px w-12 bg-accent ${align === "center" ? "mx-auto" : ""}`}
        />
      ) : (
        <div
          className={`mt-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <div className="h-px w-12 bg-stone-300" />
          <div className="h-1 w-6 bg-accent" />
          <div className="h-px w-12 bg-stone-300" />
        </div>
      )}

      {description && (
        <p
          className={`mt-5 text-sm md:text-base leading-relaxed ${descriptionColor} ${
            align === "center" ? "max-w-xl mx-auto" : "max-w-lg"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
