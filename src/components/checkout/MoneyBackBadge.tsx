import { ShieldCheck } from "lucide-react";

interface MoneyBackBadgeProps {
  /** Use "dark" when the badge sits on a dark/featured surface (e.g. the featured tier card). */
  tone?: "light" | "dark";
  className?: string;
}

const toneClasses: Record<NonNullable<MoneyBackBadgeProps["tone"]>, string> = {
  light: "bg-accent-pale text-teal-text-dark",
  dark: "bg-teal-on-slate text-brand-slate",
};

export function MoneyBackBadge({ tone = "light", className = "" }: MoneyBackBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide ${toneClasses[tone]} ${className}`}
    >
      <ShieldCheck size={14} aria-hidden="true" className="shrink-0" />
      10-day money-back guarantee
    </span>
  );
}
