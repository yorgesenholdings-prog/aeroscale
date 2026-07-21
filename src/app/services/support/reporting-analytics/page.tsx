import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("reporting-analytics")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/support/reporting-analytics",
});

export default function ReportingAnalyticsPage() {
  return <ServicePageTemplate service={service} />;
}
