import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, Repeat } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      "Yes. Combine 2–3 recurring Support services and get 10% off your combined monthly total, or combine 4 or more for 20% off. The discount applies automatically to whatever services you choose. See example combinations on the Bundles page, or build your own on the Instant Quote page to see your discounted total.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            SMALL BUSINESS CONSULTING SERVICES
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Support for the strategy, systems, and work behind small business growth.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            AeroScale&apos;s work falls into two categories. Some clients need one focused project
            finished. Others want an ongoing consulting and implementation partner. Engagements
            are designed around your business problem — not a predetermined package you have to
            fit into.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link
            href="/services/projects"
            className="group flex flex-col rounded-2xl border border-border-subtle bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md sm:p-10"
          >
            <IconBadge icon={ClipboardList} size="lg" />
            <h2 className="mt-5 text-2xl font-bold text-brand-slate group-hover:text-teal-text">
              Projects
            </h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
              Focused, one-time engagements with a defined scope and finish line — a strategic
              plan, a business plan, an automation build, a redesigned process. Each project has
              its own flat-fee pricing.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
              Explore project services
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/services/support"
            className="group flex flex-col rounded-2xl border border-border-subtle bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-text hover:shadow-md sm:p-10"
          >
            <IconBadge icon={Repeat} size="lg" />
            <h2 className="mt-5 text-2xl font-bold text-brand-slate group-hover:text-teal-text">
              Support
            </h2>
            <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
              Ongoing, recurring engagements that flex with your business month to month —
              strategy, marketing execution, reporting, automation maintenance, and more. Each
              service is priced in three tiers.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
              Explore ongoing support
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <div className="mt-8">
            <FaqAccordion items={servicesFaqs} idPrefix="services-faq" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
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
