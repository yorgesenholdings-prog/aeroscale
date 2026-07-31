import { landingPages } from "@/config/landing-pages";
import { landingPageOfferSlugs } from "@/lib/contact-schema";
import { pricingTiers } from "@/config/pricing-tiers";

export interface OnboardingEntry {
  slug: string;
  name: string;
  stripePaymentLink: string;
  onboardingFormEmbed: string;
}

// Derived from the existing offer/tier configs rather than duplicated —
// name/price/etc. stay defined in exactly one place.
export const onboardingEntries: OnboardingEntry[] = [
  ...landingPageOfferSlugs.map((slug) => {
    const offer = landingPages[slug];
    return {
      slug: offer.slug,
      name: offer.offerLabel,
      stripePaymentLink: offer.stripePaymentLink,
      onboardingFormEmbed: offer.onboardingFormEmbed,
    };
  }),
  ...pricingTiers.map((tier) => ({
    slug: tier.slug,
    name: tier.name,
    stripePaymentLink: tier.stripePaymentLink,
    onboardingFormEmbed: tier.onboardingFormEmbed,
  })),
];

export function getOnboardingEntry(slug: string): OnboardingEntry | undefined {
  return onboardingEntries.find((entry) => entry.slug === slug);
}
