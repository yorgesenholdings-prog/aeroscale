import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { services } from "@/config/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Small Business Consulting Services | AeroScale",
  description:
    "Small business consulting services covering strategy, systems, marketing, advertising, business plans, market research, and data analytics — as projects or ongoing support.",
  path: "/services",
});

const servicesFaqs = [
  {
    question: "How do I know which service is right for my business?",
    answer:
      "Most engagements start with a conversation about the problem you're trying to solve, not a specific service category. Request a free business assessment and we'll recommend where to start based on your goals, resources, and urgency.",
  },
  {
    question: "Can multiple services be combined into one engagement?",
    answer:
      "Yes. Many client problems span more than one category — for example, a data analytics project often surfaces a marketing or systems issue underneath it. Recurring business support is designed specifically to combine categories as needed.",
  },
  {
    question: "Do I have to choose between a project and ongoing support up front?",
    answer:
      "No. Many clients start with a single focused project and move into ongoing support afterward, once they see how the work fits together. Others start with ongoing support from the beginning.",
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
            AeroScale works across nine categories of small business support. Some clients need
            one focused project finished. Others want an ongoing consulting and operations
            consultant relationship across several categories at once. Engagements are designed
            around your business problem — not a predetermined package you have to fit into.
          </p>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="container-page grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-brand-slate">Consulting vs. implementation</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Consulting means research, strategy, and recommendations — the thinking work. Implementation
              means actually building the plan, system, campaign, or report. AeroScale offers
              both, and many engagements include a mix: enough strategy to know what&apos;s right for your
              business, and enough hands-on work to get it built.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-slate">One-time projects</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              A focused project has a defined scope and endpoint — a business plan, a research
              report, an automated workflow, a set of SOPs. It&apos;s the right fit when you have one
              important piece of work that needs to get finished.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-slate">Recurring support</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Recurring engagements provide ongoing access to strategy, marketing, systems, and
              reporting support on a regular cadence. It&apos;s the right fit when your business has
              continuing needs across more than one area, or wants consistent accountability and
              follow-through over time.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-slate">How categories work together</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Business problems rarely stay inside one category. A market research project often
              informs a business plan; a data analytics engagement often surfaces a marketing or
              systems gap. We scope engagements around the problem, drawing on whichever categories
              are actually relevant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="ALL SERVICE CATEGORIES" heading="Explore each service" />
          <div className="mt-10 space-y-6">
            {services.map((service) => (
              <ServiceOverviewCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <div className="mt-8">
            <FaqAccordion items={servicesFaqs} idPrefix="services-faq" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
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
