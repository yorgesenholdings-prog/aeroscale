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
    "AeroScale's small business consulting services fall into two categories: one-time Projects and ongoing Support. Explore both to find the right starting point.",
  path: "/services",
});

const servicesFaqs = [
  {
    question: "How do I know which service is right for my business?",
    answer:
      "Most engagements start with a conversation about the problem you're trying to solve, not a specific service. Request a free business assessment and we'll recommend where to start based on your goals, resources, and urgency.",
  },
  {
    question: "What's the difference between Projects and Support?",
    answer:
      "Projects are one-time engagements with a defined scope and endpoint, each priced as a flat fee. Support is ongoing, recurring work billed monthly at a tier that matches how much help you need.",
  },
  {
    question: "Do I have to choose between a project and ongoing support up front?",
    answer:
      "No. Many clients start with a single focused project and move into ongoing support afterward, once they see how the work fits together. Others start with ongoing support from the beginning.",
  },
  {
    question: "Is there a discount for combining multiple Support services?",
    answer:
      "Yes. Combine 2–3 recurring Support services and get 10% off your combined monthly total, or combine 4 or more for 20% off. The discount applies automatically to whatever services you choose. See example combinations on the Bundles page.",
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
            Most clients start with one of the two core services below. Need something more
            specific? The full range of one-time projects and ongoing support is also available
            further down.
          </p>
        </div>
      </section>

      <FeaturedOffers />

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page max-w-2xl">
          <SectionHeading
            heading="Looking for additional services?"
            supporting="Browse the full catalog of one-time projects and ongoing support."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services/projects" variant="secondary" size="lg" className="w-full sm:w-auto">
              Projects
            </Button>
            <Button href="/services/support" variant="secondary" size="lg" className="w-full sm:w-auto">
              Support
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <ScrollReveal className="mt-8">
            <FaqAccordion items={servicesFaqs} idPrefix="services-faq" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
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
