import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  headingLevel?: "h2" | "h1";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  headingLevel = "h2",
  className = "",
}: SectionHeadingProps) {
  const Heading = headingLevel;
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
        {heading}
      </Heading>
      {supporting && <p className="mt-4 text-lg leading-relaxed text-text-muted">{supporting}</p>}
    </div>
  );
}
