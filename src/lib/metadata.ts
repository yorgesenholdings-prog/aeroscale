import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, noIndex }: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    // Every page in this site is given its exact, final title string
    // (already including "| AeroScale" where applicable), so use
    // `absolute` to bypass the root layout's title.template.
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
