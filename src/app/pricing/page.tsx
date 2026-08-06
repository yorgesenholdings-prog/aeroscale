import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import { OfferCard } from "@/components/offer/OfferCard";
import { PillarDetailAccordion } from "@/components/offer/PillarDetailAccordion";
import { offer, offerPricing, faqs } from "@/config/offer";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing | AeroScale",
  description: `The AeroScale Full System — one done-for-you growth system, ${offerPricing.promoPriceLabel}${offerPricing.priceSuffix} limited-time (normally ${offerPricing.standardPriceLabel}${offerPricing.priceSuffix}). No setup fee, no long-term contract.`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">PRICING</span>
          <h1 className="mt-4 text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.02em] text-brand-slate">
            One system. Seven pillars. Everything your growth needs.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            The AeroScale Full System is done-for-you, with no setup fee and no long-term
            contract. Usage costs (SMS sends, AI voice minutes, phone numbers) are billed
            separately based on what you actually use.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-lg">
            <ScrollReveal>
              <OfferCard ctaLabel="Get Started" ctaHref={offer.stripePaymentLink} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="THE 7 PILLARS"
            heading="What's included"
            supporting="Live pillars are running for clients today. Rolling Out pillars are being built now and are included in your price from day one — no separate charge when they launch."
          />
          <ScrollReveal className="mt-10">
            <PillarDetailAccordion />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="GETTING STARTED" heading="What we'll need from you" />
          <ScrollReveal className="mt-10">
            <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)] sm:p-8">
              <p className="text-sm font-medium text-text-primary">{offer.onboarding.intro}</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {offer.onboarding.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="COMMON QUESTIONS" heading="Frequently asked questions" />
          <ScrollReveal className="mt-8">
            <FaqAccordion items={faqs} idPrefix="pricing-faq" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-[20px] bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to get started?</h2>
            <p className="mt-3 text-white/80">
              Get the whole AeroScale Full System — no setup fee, cancel anytime.
            </p>
          </div>
          <CheckoutButton href={offer.stripePaymentLink} size="lg" className="shrink-0">
            {offer.ctaLabel}
          </CheckoutButton>
        </div>
      </section>
    </>
  );
}
