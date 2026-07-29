import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeaturedOffers } from "@/components/sections/FeaturedOffers";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Small Business Consulting Services | AeroScale",
  description:
    "AeroScale's small business consulting services: Review Follow-Up Automation and Ad Optimization, standalone or as part of a full growth system.",
  path: "/services",
});

const servicesFaqs = [
  {
    question: "How do I know which service is right for my business?",
    answer:
      "Most engagements start with a conversation about the problem you're trying to solve, not a specific service. Request a free business assessment and we'll recommend where to start based on your goals, resources, and urgency.",
  },
  {
    question: "Can I hire AeroScale for just one of these services?",
    answer:
      "Yes. Both Review Follow-Up Automation and Ad Optimization Service are available on their own, billed monthly with no long-term contract.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            SMALL BUSINESS CONSULTING SERVICES
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Support for the strategy, systems, and work behind small business growth.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            AeroScale&apos;s services are built around two focused, done-for-you systems — each
            billed monthly with no long-term contract.
          </p>
        </div>
      </section>

      <FeaturedOffers />

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <ScrollReveal className="mt-8">
            <FaqAccordion items={servicesFaqs} idPrefix="services-faq" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-[20px] bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Not sure which service fits your business?
            </h2>
            <p className="mt-3 text-white/80">
              Request a free assessment and we&apos;ll recommend where to start.
            </p>
          </div>
          <Button href="/contact" size="lg" className="shrink-0">
            Get a Free Business Assessment
          </Button>
        </div>
      </section>
    </>
  );
}
