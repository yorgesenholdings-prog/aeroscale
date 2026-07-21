import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("automation-maintenance")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/support/automation-maintenance",
});

export default function AutomationMaintenancePage() {
  return <ServicePageTemplate service={service} />;
}
