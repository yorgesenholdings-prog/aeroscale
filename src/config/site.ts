export const siteConfig = {
  name: "AeroScale",
  tagline: "The support system behind your business.",
  positioningStatement:
    "AeroScale provides small business consulting, strategy, marketing, systems, research, analytics, and hands-on implementation—giving owners the specialized support they need without building every department in-house.",
  supportingStatement:
    "Bring us one important project or use AeroScale as an ongoing extension of your team.",
  shortDescription:
    "AeroScale is a small business consulting and support company that helps owners solve problems, complete important projects, and build stronger businesses. We provide practical strategy and hands-on support across marketing, advertising, systems and automation, SOPs, business planning, market research, and data analytics through both one-time projects and ongoing monthly support.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: process.env.CONTACT_TO_EMAIL || "hello@aeroscale.com",
  ogImage: "/og-image.png",
  // Configurable organization details for structured data. Only include
  // fields that are actually accurate — do not invent address, phone,
  // ratings, or founding date. Fill these in when the business supplies them.
  organization: {
    legalName: "AeroScale",
    streetAddress: undefined as string | undefined,
    addressLocality: undefined as string | undefined,
    addressRegion: undefined as string | undefined,
    postalCode: undefined as string | undefined,
    addressCountry: "US" as string | undefined,
    telephone: undefined as string | undefined,
    foundingDate: undefined as string | undefined,
    sameAs: [] as string[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
