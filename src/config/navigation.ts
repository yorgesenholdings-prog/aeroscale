import type { NavLink } from "@/types";

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = {
  label: "Get a Free Business Assessment",
  href: "/contact",
};

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
