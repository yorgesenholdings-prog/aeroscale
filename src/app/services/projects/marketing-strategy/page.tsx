import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("marketing-strategy")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/projects/marketing-strategy",
});

export default function MarketingStrategyPage() {
  return <ServicePageTemplate service={service} />;
}
