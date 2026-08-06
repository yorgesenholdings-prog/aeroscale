import { landingPageOfferSlugs } from "@/lib/contact-schema";
import type { OfferPillarSlug } from "@/config/offer";

export type LandingPageOfferSlug = (typeof landingPageOfferSlugs)[number];

export interface LandingPageFaq {
  question: string;
  answer: string;
}

/**
 * Both /lp/* pages sell the same AeroScale Full System offer (see
 * config/offer.ts) — this config defines each page's ad-matching "hook"
 * only: which pillar it leads with and the page-specific framing copy.
 * Price, CTA, pillar list, and the shared FAQ all come from offer.ts so
 * the two pages and /pricing can never drift out of sync on what's
 * actually included.
 *
 * `slug` (passed through to /api/contact as `offerSlug`) is now purely an
 * attribution field — "which ad page generated this lead" — not a product
 * identifier, since there's only one product.
 */
export interface LandingPageContent {
  slug: LandingPageOfferSlug;
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Which pillar this page leads with in its Spotlight section. */
  hookPillarSlug: OfferPillarSlug;
  problem: string[];
  /** Page-specific FAQs, prepended to the shared offer.faqs list. */
  extraFaqs?: LandingPageFaq[];
  trustHeading: string;
  trustBody: string[];
  finalCtaHeading: string;
  finalCtaSubheading: string;
}

export const landingPages: Record<LandingPageOfferSlug, LandingPageContent> = {
  automation: {
    slug: "automation",
    path: "/lp/automation",
    metaTitle: "Reviews On Autopilot | AeroScale",
    metaDescription:
      "Automated review follow-up and response, built into the AeroScale Full System — one done-for-you growth system, limited-time pricing.",
    eyebrow: "REVIEWS & REPUTATION",
    headline: "Reviews On Autopilot — Without Ever Asking Twice",
    subheadline:
      "Every completed job automatically triggers a review request, with auto-response and a referral loop built in — one piece of the complete AeroScale Full System.",
    hookPillarSlug: "reputation-manager",
    problem: [
      "Most business owners lose reviews for one simple reason: nobody asked at the right time.",
      "The job gets done, the invoice gets paid, and the follow-up message never gets sent — because there's no system for it, just a mental note that gets forgotten.",
      "Every skipped ask is a review — and a future customer — you don't get.",
    ],
    extraFaqs: [
      {
        question: "What if I don't have a CRM or customer list?",
        answer:
          "We'll work with whatever you have — even a spreadsheet. If you need help getting your customer data organized first, we can quote that separately.",
      },
      {
        question: "Do you write the responses to my reviews, or do I?",
        answer:
          "We handle it automatically. Every review gets the same standard public response regardless of star rating — we never write different responses to steer attention toward positive reviews or away from negative ones. If a review needs a real resolution, like a service complaint, we recommend following up with that customer directly rather than relying on the automated reply.",
      },
    ],
    trustHeading: "Why We Built This",
    trustBody: [
      "Most small businesses aren't losing reviews because customers don't want to leave them — they're losing them because nobody has time to ask consistently.",
      "That's a systems problem, not a willpower problem. Reputation Manager doesn't need another task on your list — it runs in the background, automatically, every time.",
    ],
    finalCtaHeading: "Ready to Stop Losing Reviews?",
    finalCtaSubheading: "Fill out the form below and we'll be in touch to get your system running.",
  },
  "marketing-management": {
    slug: "marketing-management",
    path: "/lp/marketing-management",
    metaTitle: "Ads That Get Managed | AeroScale",
    metaDescription:
      "Ongoing ad optimization, tied into automated lead nurturing — built into the AeroScale Full System, limited-time pricing.",
    eyebrow: "ADS THAT GET MANAGED",
    headline: "Your Ad Isn't the Problem. What Happens After the Click Is.",
    subheadline:
      "Ongoing optimization of your existing ad campaigns — targeting, messaging, A/B testing — tied directly into automated nurturing so ad traffic never goes cold. One piece of the complete AeroScale Full System.",
    hookPillarSlug: "paid-ads-nurturing",
    problem: [
      "Most business owners set up an ad campaign once, launch it, and never touch it again.",
      "Meanwhile, the platform's default targeting, the ad copy, and the campaign settings are quietly leaving performance on the table — because nobody is testing or adjusting them.",
      "The ad creative might be great. The setup behind it — and what happens after someone clicks — usually isn't.",
    ],
    extraFaqs: [
      {
        question: "Will you create my ad for me?",
        answer:
          "No. This optimizes the targeting, messaging, and settings behind an ad campaign you already have running. We don't design, film, or produce ad creative.",
      },
      {
        question: "What if I already tried optimizing this myself?",
        answer:
          "That's common — most owners make a few changes early on and then stop testing. We treat optimization as an ongoing process, not a one-time cleanup, which is what tends to move the numbers over time.",
      },
    ],
    trustHeading: "Why We Built This",
    trustBody: [
      "We kept seeing the same pattern: a decent ad, a campaign set up once, and nobody looking at the targeting or testing anything after launch — let alone what happened to the lead after they clicked.",
      "That's the part that compounds. A campaign that's actively tested and adjusted, feeding into a nurturing system that never lets a lead go cold, outperforms one left alone — even with the exact same ad creative.",
    ],
    finalCtaHeading: "Ready to Get More From Your Ad Spend?",
    finalCtaSubheading: "Fill out the form below and we'll reach out to schedule a quick call.",
  },
};

export function getLandingPage(slug: LandingPageOfferSlug): LandingPageContent {
  return landingPages[slug];
}
