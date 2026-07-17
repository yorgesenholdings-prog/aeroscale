import Link from "next/link";

type LogoVariant = "color" | "white" | "slate";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

const markColors: Record<
  LogoVariant,
  { frameFill: string; frameOpacity: number; connector: string; node: string; accentNode: string }
> = {
  color: {
    frameFill: "#3a4f66",
    frameOpacity: 1,
    connector: "#ffffff",
    node: "#ffffff",
    accentNode: "#00a896",
  },
  white: {
    frameFill: "#ffffff",
    frameOpacity: 0.18,
    connector: "#ffffff",
    node: "#ffffff",
    accentNode: "#ffffff",
  },
  slate: {
    frameFill: "#3a4f66",
    frameOpacity: 1,
    connector: "#ffffff",
    node: "#ffffff",
    accentNode: "#ffffff",
  },
};

const textColors: Record<LogoVariant, { first: string; second: string }> = {
  color: { first: "#3a4f66", second: "#00a896" },
  white: { first: "#ffffff", second: "#ffffff" },
  slate: { first: "#3a4f66", second: "#3a4f66" },
};

/**
 * A small structural mark: a central support beam with two connected
 * nodes branching off it, suggesting the connected functions
 * (strategy, marketing, systems) that support a central business.
 * Deliberately abstract — not a spine or medical illustration.
 */
function LogoMark({ variant }: { variant: LogoVariant }) {
  const colors = markColors[variant];
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="8"
        fill={colors.frameFill}
        opacity={colors.frameOpacity}
      />
      <line x1="16" y1="6" x2="16" y2="26" stroke={colors.connector} strokeWidth="2.25" strokeLinecap="round" />
      <line x1="16" y1="12" x2="23" y2="9" stroke={colors.connector} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="20" x2="9" y2="23" stroke={colors.connector} strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="9" r="2.25" fill={colors.accentNode} />
      <circle cx="9" cy="23" r="2.25" fill={colors.node} />
      <circle cx="16" cy="16" r="2.25" fill={colors.node} />
    </svg>
  );
}

export function Logo({ variant = "color", className = "", href = "/" }: LogoProps) {
  const text = textColors[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm ${className}`}
      aria-label="AeroScale home"
    >
      <LogoMark variant={variant} />
      <span className="text-lg font-bold tracking-tight leading-none">
        <span style={{ color: text.first }}>Aero</span>
        <span style={{ color: text.second }}>Scale</span>
      </span>
    </Link>
  );
}
