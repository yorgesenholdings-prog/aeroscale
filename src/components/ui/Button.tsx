import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:hover:shadow-none";

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-slate text-white shadow-[0_1px_2px_rgba(20,20,26,0.08)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(20,20,26,0.18)]",
  secondary:
    "bg-transparent text-brand-slate border-[1.5px] border-slate-muted hover:border-brand-slate hover:bg-surface-muted",
  ghost: "bg-transparent text-brand-slate hover:bg-surface-muted",
  /** For CTAs placed on a dark/featured card — light accent fill, no shadow. */
  onDark: "bg-teal-on-slate text-brand-slate hover:-translate-y-0.5 hover:brightness-105",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
