import { siteConfig } from "@/config/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildAddress() {
  const org = siteConfig.organization;
  if (!org.streetAddress && !org.addressLocality) return undefined;
  return {
    "@type": "PostalAddress",
    streetAddress: org.streetAddress,
    addressLocality: org.addressLocality,
    addressRegion: org.addressRegion,
    postalCode: org.postalCode,
    addressCountry: org.addressCountry,
  };
}

export function organizationJsonLd() {
  const org = siteConfig.organization;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.shortDescription,
    ...(org.telephone ? { telephone: org.telephone } : {}),
    ...(org.foundingDate ? { foundingDate: org.foundingDate } : {}),
    ...(buildAddress() ? { address: buildAddress() } : {}),
    ...(org.sameAs.length ? { sameAs: org.sameAs } : {}),
  };
}

export function professionalServiceJsonLd() {
  const org = siteConfig.organization;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    ...(org.telephone ? { telephone: org.telephone } : {}),
    ...(buildAddress() ? { address: buildAddress() } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, siteConfig.url).toString(),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: input.name,
  };
}
