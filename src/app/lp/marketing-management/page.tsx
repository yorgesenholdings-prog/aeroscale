import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/lp/LandingPageTemplate";
import { getLandingPage } from "@/config/landing-pages";
import { buildMetadata } from "@/lib/metadata";

const content = getLandingPage("marketing-management");

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  noIndex: true,
});

export default function MarketingManagementLandingPage() {
  return <LandingPageTemplate content={content} />;
}
