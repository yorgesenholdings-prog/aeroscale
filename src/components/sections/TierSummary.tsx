import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TierCard } from "@/components/pricing/TierCard";
import { pricingTiers } from "@/config/pricing-tiers";

/**
 * Homepage teaser for the 3-tier system — the site's core offer. Each card
 * links deeper into /pricing rather than straight to contact, since this is
 * a preview, not the final decision point.
 */
export function TierSummary() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="THE AEROSCALE SYSTEM"
          heading="Start with the basics, or run the whole system."
          supporting="Three done-for-you growth systems, each building on the last — no setup fee, no long-term contract."
        />
        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-start">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.slug} index={index}>
              <TierCard tier={tier} ctaLabel="View Plan Details" ctaHref="/pricing" />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-text-muted">
          Prefer to start smaller? Review Follow-Up & Review Response Automation and Ad
          Optimization Service are also available on their own —{" "}
          <Link href="/services" className="font-semibold text-teal-text hover:text-teal-text-dark">
            see our standalone services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
