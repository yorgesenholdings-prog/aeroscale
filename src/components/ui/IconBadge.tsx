import type { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: "teal" | "slate" | "white";
  size?: "md" | "lg";
  className?: string;
}

const toneClasses = {
  teal: "bg-surface-muted text-teal-text",
  slate: "bg-brand-slate text-white",
  white: "bg-white/15 text-white",
};

const sizeClasses = {
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

const iconSizes = {
  md: 20,
  lg: 26,
};

export function IconBadge({ icon: Icon, tone = "teal", size = "md", className = "" }: IconBadgeProps) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-lg ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
    >
      <Icon size={iconSizes[size]} aria-hidden="true" />
    </div>
  );
}
