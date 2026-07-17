import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { getServiceBySlug } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("recurring-business-support")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/recurring-business-support",
});

const engagementStructures = [
  {
    name: "Advisory Support",
    description:
      "For owners who primarily need prioritization, planning, accountability, and decision support.",
  },
  {
    name: "Growth Support",
    description:
      "For businesses needing recurring strategy, marketing, reporting, and implementation.",
  },
  {
    name: "Operations Support",
    description:
      "For businesses needing systems, SOPs, automation, process improvement, and operational help.",
  },
  {
    name: "Custom Support",
    description: "For businesses needing a combination of multiple service categories.",
  },
];

function SampleEngagementStructures() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="SAMPLE STRUCTURES"
          heading="Four sample engagement structures"
          headingLevel="h2"
          supporting="These are illustrative starting points, not fixed packages or pricing — the right mix is scoped to your business."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagementStructures.map((structure) => (
            <Card key={structure.name}>
              <h3 className="text-base font-semibold text-brand-slate">{structure.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{structure.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RecurringBusinessSupportPage() {
  return <ServicePageTemplate service={service} afterIntro={<SampleEngagementStructures />} />;
}
