import { getServicesByCategory } from "@/config/services";
import type { NavLink } from "@/types";

export const projectNavLinks: NavLink[] = getServicesByCategory("projects").map((service) => ({
  label: service.name,
  href: `/services/${service.category}/${service.slug}`,
  description: service.shortDescription,
}));

export const supportNavLinks: NavLink[] = getServicesByCategory("support").map((service) => ({
  label: service.name,
  href: `/services/${service.category}/${service.slug}`,
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

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "All Services", href: "/services" },
  { label: "Projects", href: "/services/projects" },
  { label: "Support", href: "/services/support" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
