import { Check } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LandingPageHeader } from "@/components/lp/LandingPageHeader";
import { LandingPageLeadForm } from "@/components/lp/LandingPageLeadForm";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import { OfferPriceDisplay } from "@/components/offer/OfferPriceDisplay";
import { PillarDetailAccordion } from "@/components/offer/PillarDetailAccordion";
import { ChatSequenceVisual } from "@/components/sections/ChatSequenceVisual";
import { AdOptimizationDashboardVisual } from "@/components/sections/AdOptimizationDashboardVisual";
import { offer, offerPricing, faqs, pillars, getPillar } from "@/config/offer";
import type { LandingPageContent } from "@/config/landing-pages";

/** Which visual widget hooks each pillar's Spotlight section — both are self-contained, no props. */
const spotlightVisual: Partial<Record<string, React.ComponentType>> = {
  "reputation-manager": ChatSequenceVisual,
  "paid-ads-nurturing": AdOptimizationDashboardVisual,
};

export function LandingPageTemplate({ content }: { content: LandingPageContent }) {
  const hookPillar = getPillar(content.hookPillarSlug);
  const SpotlightVisual = spotlightVisual[content.hookPillarSlug];

  return (
    <>
      <LandingPageHeader />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-page max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            {content.eyebrow}
          </span>
          <h1 className="mt-4 text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.02em] text-brand-slate">
            {content.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">{content.subheadline}</p>

          <div className="mt-7 inline-flex items-baseline gap-2 rounded-2xl bg-surface px-5 py-3">
            <OfferPriceDisplay size="lg" tone="onLight" />
          </div>

          <div className="mt-7">
            <CheckoutButton href={offer.stripePaymentLink} size="lg" className="w-full sm:w-auto">
              {offer.ctaLabel}
            </CheckoutButton>
          </div>
        </div>
      </section>

      {/* Spotlight — the specific pillar this page's ad copy hooks on */}
      {hookPillar && (
        <section className="bg-surface py-12 md:py-16">
          <div className="container-page max-w-2xl">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="flex-1">
                <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
                  {hookPillar.headline}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{hookPillar.body}</p>
              </div>
              {SpotlightVisual && (
                <div className="flex-1">
                  <SpotlightVisual />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Problem framing */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page max-w-2xl space-y-4">
          {content.problem.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-text-primary">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* The offer */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            The Offer: {offer.name}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-muted">
            {hookPillar?.name} is one of seven pillars included in the complete AeroScale Full
            System:
          </p>
          <ul className="mt-6 space-y-3">
            {pillars.map((pillar) => (
              <li key={pillar.slug} className="flex items-start gap-2.5 text-base text-text-primary">
                <Check size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                {pillar.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-slate py-12 md:py-14">
        <div className="container-page max-w-2xl text-center">
          <p className="text-lg font-semibold text-white">
            {offerPricing.promoActive ? offerPricing.promoPriceLabel : offerPricing.standardPriceLabel}
            {offerPricing.priceSuffix} — no setup fee, cancel anytime.
          </p>
          <div className="mt-5">
            <CheckoutButton href={offer.stripePaymentLink} size="lg" variant="onDark" className="w-full sm:w-auto">
              {offer.ctaLabel}
            </CheckoutButton>
          </div>
        </div>
      </section>

      {/* What's included / not included — shared with /pricing, so this can never drift */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            What&apos;s Included / Not Included
          </h2>
          <ScrollReveal className="mt-8">
            <PillarDetailAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={[...(content.extraFaqs ?? []), ...faqs]} idPrefix={`${content.slug}-faq`} />
          </div>
        </div>
      </section>

      {/* Trust / credibility */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            {content.trustHeading}
          </h2>
          <div className="mt-5 space-y-4">
            {content.trustBody.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + embedded lead form */}
      <section id="get-started" className="scroll-mt-6 bg-surface py-14 md:py-20">
        <div className="container-page max-w-md">
          <h2 className="text-center text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            {content.finalCtaHeading}
          </h2>
          <p className="mt-3 text-center text-base leading-relaxed text-text-muted">
            {content.finalCtaSubheading}
          </p>
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)] sm:p-8">
            <LandingPageLeadForm offerSlug={content.slug} offerLabel={offer.name} ctaLabel={offer.ctaLabel} />
          </div>
        </div>
      </section>
    </>
  );
}
