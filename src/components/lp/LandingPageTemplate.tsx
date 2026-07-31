import { Check, X } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LandingPageHeader } from "@/components/lp/LandingPageHeader";
import { LandingPageLeadForm } from "@/components/lp/LandingPageLeadForm";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import type { LandingPageContent } from "@/config/landing-pages";

export function LandingPageTemplate({ content }: { content: LandingPageContent }) {
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
            <span className="font-display text-3xl font-bold text-brand-slate">{content.priceLabel}</span>
          </div>

          <div className="mt-7">
            <CheckoutButton href={content.stripePaymentLink} size="lg" className="w-full sm:w-auto">
              {content.ctaLabel}
            </CheckoutButton>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-2xl space-y-4">
          {content.problem.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-text-primary">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* The offer */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            The Offer: {content.priceLabel}
          </h2>
          <ul className="mt-6 space-y-3">
            {content.offerBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-base text-text-primary">
                <Check size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            How It Works
          </h2>
          <div className="mt-8 space-y-8">
            {content.howItWorks.map((step, index) => (
              <ScrollReveal key={step.title} index={index} className="flex gap-4">
                <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-teal-on-dark">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-slate">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-slate py-12 md:py-14">
        <div className="container-page max-w-2xl text-center">
          <p className="text-lg font-semibold text-white">
            {content.priceLabel} — no setup fee, cancel anytime.
          </p>
          <div className="mt-5">
            <CheckoutButton href={content.stripePaymentLink} size="lg" variant="onDark" className="w-full sm:w-auto">
              {content.ctaLabel}
            </CheckoutButton>
          </div>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            What&apos;s Included / Not Included
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ScrollReveal index={0} className="rounded-[20px] bg-surface p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-teal-text">Included</h3>
              <ul className="mt-4 space-y-3">
                {content.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-primary">
                    <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal index={1} className="rounded-[20px] border-2 border-error bg-error-surface p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-error">Not Included</h3>
              <ul className="mt-4 space-y-3">
                {content.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-primary">
                    <X size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-error" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-2xl">
          <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.01em] text-brand-slate">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} idPrefix={`${content.slug}-faq`} />
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
            <LandingPageLeadForm offerSlug={content.slug} offerLabel={content.offerLabel} ctaLabel={content.ctaLabel} />
          </div>
        </div>
      </section>
    </>
  );
}
