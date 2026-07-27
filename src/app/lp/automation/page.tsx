import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/lp/LandingPageTemplate";
import { getLandingPage } from "@/config/landing-pages";
import { buildMetadata } from "@/lib/metadata";

const content = getLandingPage("automation");

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  noIndex: true,
});

export default function AutomationLandingPage() {
  return <LandingPageTemplate content={content} />;
}
