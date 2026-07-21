import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("data-dashboards")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/projects/data-dashboards",
});

export default function DataDashboardsPage() {
  return <ServicePageTemplate service={service} />;
}
