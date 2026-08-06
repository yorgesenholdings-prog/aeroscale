import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PillarOverview } from "@/components/sections/PillarOverview";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "What We Do | AeroScale",
  description:
    "The AeroScale Full System: a 7-part done-for-you growth system covering your website, lead follow-up, reviews, missed calls, sales coaching, database reactivation, and ad management.",
  path: "/services",
});

const servicesFaqs = [
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Most engagements start with a conversation about the problem you're trying to solve. Request a free assessment and we'll walk through your goals, resources, and urgency.",
  },
  {
    question: "Is this available piece by piece?",
    answer:
      "No — the Full System is a single monthly offer that includes all seven pillars together. That's what makes the pricing and delivery model work; the pieces are built to reinforce each other rather than being sold as separate add-ons.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">WHAT WE DO</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Everything your business needs to turn traffic into booked customers.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            The AeroScale Full System covers your website, lead follow-up, reviews and referrals,
            missed calls, sales coaching, your existing customer list, and ad management — one
            integrated system, not a menu of separate services.
          </p>
        </div>
      </section>

      <PillarOverview />

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
              Not sure this is right for your business?
            </h2>
            <p className="mt-3 text-white/80">
              Request a free assessment and we&apos;ll walk you through it.
            </p>
          </div>
          <Button href="/pricing" size="lg" className="shrink-0">
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
