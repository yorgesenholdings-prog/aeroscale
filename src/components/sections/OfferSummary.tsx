import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OfferCard } from "@/components/offer/OfferCard";

/**
 * Homepage teaser for the single AeroScale Full System offer. Links to
 * /pricing rather than straight to checkout — this is a preview, not the
 * final decision point.
 */
export function OfferSummary() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="THE AEROSCALE SYSTEM"
          heading="One system. Seven pillars. Everything your growth needs."
          supporting="A single done-for-you growth system — no setup fee, no long-term contract."
        />
        <div className="mx-auto mt-14 max-w-lg">
          <ScrollReveal>
            <OfferCard ctaLabel="View Plan Details" ctaHref="/pricing" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
