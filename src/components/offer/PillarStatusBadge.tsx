import type { PillarBuildStatus } from "@/config/offer";

interface PillarStatusBadgeProps {
  status: PillarBuildStatus;
  /** Use "dark" when this sits on a dark/featured surface. */
  tone?: "light" | "dark";
  className?: string;
}

const label: Record<PillarBuildStatus, string> = {
  built: "Live",
  partial: "Rolling Out",
  "not-built": "Rolling Out",
};

const toneClasses: Record<NonNullable<PillarStatusBadgeProps["tone"]>, Record<PillarBuildStatus, string>> = {
  light: {
    built: "bg-accent-pale text-teal-text-dark",
    partial: "bg-surface-muted text-text-muted",
    "not-built": "bg-surface-muted text-text-muted",
  },
  dark: {
    built: "bg-teal-on-slate text-brand-slate",
    partial: "bg-white/10 text-white",
    "not-built": "bg-white/10 text-white",
  },
};

export function PillarStatusBadge({ status, tone = "light", className = "" }: PillarStatusBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide uppercase ${toneClasses[tone][status]} ${className}`}
    >
      {label[status]}
    </span>
  );
}
