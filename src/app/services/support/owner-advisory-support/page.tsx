import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("owner-advisory-support")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/support/owner-advisory-support",
});

export default function OwnerAdvisorySupportPage() {
  return <ServicePageTemplate service={service} />;
}
