import { services } from "@/config/services";
import type { NavLink } from "@/types";

export const serviceNavLinks: NavLink[] = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
  description: service.shortDescription,
}));

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = {
  label: "Get a Free Business Assessment",
  href: "/contact",
};

export const footerServiceLinks: NavLink[] = serviceNavLinks;

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
