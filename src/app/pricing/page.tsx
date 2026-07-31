import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { TierCard } from "@/components/pricing/TierCard";
import { TierDetailAccordion } from "@/components/pricing/TierDetailAccordion";
import { pricingTiers } from "@/config/pricing-tiers";
import { landingPages } from "@/config/landing-pages";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing | AeroScale",
  description:
    "Three done-for-you growth systems — Foundation ($499/mo), Growth System ($999/mo), and Full System ($2,199/mo). No setup fee, no long-term contract.",
  path: "/pricing",
});

const onboardingByTier = [
  {
    tierNumber: 1,
    tierName: "Foundation",
    intro: "To get started, we'll need:",
    items: ["Access to your Google Business listing", "Access to your existing ad account"],
  },
  {
    tierNumber: 2,
    tierName: "Growth System",
    intro: "Everything in Foundation, plus:",
    items: [
      "Your existing contact list",
      "Written confirmation of that list's consent status (see our Database Reactivation compliance policy)",
    ],
  },
  {
    tierNumber: 3,
    tierName: "Full System",
    intro: "Everything in Growth System, plus:",
    items: ["Access to your business phone number", "FAQ content for the AI receptionist script"],
  },
];

const standaloneOfferSlugs = ["automation", "marketing-management"] as const;

const pricingFaqs = [
  {
    question: "Can I upgrade tiers later?",
    answer:
      "Yes. Since every tier builds on the last, moving up is a straightforward change to what's already running — not a rebuild from scratch.",
  },
  {
    question: "What if I only want one service?",
    answer:
      "Review Follow-Up & Review Response Automation ($200/month) and Ad Optimization Service ($400/month) are both available on their own, outside of the tiers.",
  },
  {
    question: "How does billing work for usage costs like SMS and AI voice minutes?",
    answer:
      "The monthly tier price covers the system itself. Usage costs — SMS sends, AI voice minutes, phone numbers — are billed separately based on what you actually use, so your base price stays predictable regardless of volume.",
  },
  {
    question: "Do you require a contract?",
    answer:
      "No long-term contract on any tier. Billing is monthly, and you can cancel anytime with notice before your next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. Every tier is built once and deployed the same way for every client, so there's no separate setup charge — the monthly price is everything.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">PRICING</span>
          <h1 className="mt-4 text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.02em] text-brand-slate">
            Pick the system that fits where your business is today.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Start with the basics, or run the whole system — every tier is done-for-you, with no
            setup fee and no long-term contract. Usage costs (SMS sends, AI voice minutes, phone
            numbers) are billed separately based on what you actually use.
          </p>
        </div>
      </section>

      <section id="tiers" className="scroll-mt-6 bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-start">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.slug} index={index}>
                <TierCard tier={tier} ctaLabel="Get Started" ctaHref={tier.stripePaymentLink} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="SCOPE, TIER BY TIER"
            heading="What's included, tier by tier"
            supporting="Every tier includes everything below it. Expand a tier to see exactly what each newly-added piece does and doesn't cover."
          />
          <ScrollReveal className="mt-10">
            <TierDetailAccordion />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="GETTING STARTED"
            heading="What we'll need from you"
            supporting="Onboarding scales with the tier you choose — here's what to have ready."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {onboardingByTier.map((tier, index) => (
              <ScrollReveal key={tier.tierNumber} index={index}>
                <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
                    Tier {tier.tierNumber}
                  </span>
                  <h3 className="font-display mt-1.5 text-lg font-semibold text-brand-slate">
                    {tier.tierName}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-text-primary">{tier.intro}</p>
                  <ul className="mt-3 space-y-2">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="PREFER TO START SMALLER?"
            heading="Two standalone offers, no tier required"
            supporting="Not ready for a bundled commitment? Both of Tier 1's core pieces are available on their own."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {standaloneOfferSlugs.map((slug, index) => {
              const offer = landingPages[slug];
              return (
                <ScrollReveal key={slug} index={index}>
                  <div className="flex h-full flex-col rounded-2xl bg-surface p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
                    <h3 className="font-display text-lg font-semibold text-brand-slate">
                      {offer.offerLabel}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                      {offer.subheadline}
                    </p>
                    <p className="font-display mt-4 text-2xl font-bold text-brand-slate">
                      {offer.priceLabel}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button href="/services" variant="secondary" size="lg">
              See Our Standalone Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <ScrollReveal className="mt-8">
            <FaqAccordion items={pricingFaqs} idPrefix="pricing-faq" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-[20px] bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to pick your plan?
            </h2>
            <p className="mt-3 text-white/80">
              Compare the three tiers above and get started with the one that fits.
            </p>
          </div>
          <Button href="#tiers" size="lg" className="shrink-0">
            See the Plans
          </Button>
        </div>
      </section>
    </>
  );
}
