import { landingPageOfferSlugs } from "@/lib/contact-schema";

export type LandingPageOfferSlug = (typeof landingPageOfferSlugs)[number];

export interface LandingPageStep {
  title: string;
  description: string;
}

export interface LandingPageFaq {
  question: string;
  answer: string;
}

export interface LandingPageContent {
  slug: LandingPageOfferSlug;
  path: string;
  metaTitle: string;
  metaDescription: string;
  offerLabel: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  priceLabel: string;
  ctaLabel: string;
  problem: string[];
  offerBullets: string[];
  howItWorks: LandingPageStep[];
  included: string[];
  notIncluded: string[];
  faqs: LandingPageFaq[];
  trustHeading: string;
  trustBody: string[];
  finalCtaHeading: string;
  finalCtaSubheading: string;
}

export const landingPages: Record<LandingPageOfferSlug, LandingPageContent> = {
  automation: {
    slug: "automation",
    path: "/lp/automation",
    metaTitle: "Review Follow-Up & Review Response Automation | AeroScale",
    metaDescription:
      "Automated review follow-up and response for small businesses — $200/month. We build it, connect it to your existing customer data, and maintain it every month.",
    offerLabel: "Review Follow-Up & Review Response Automation",
    eyebrow: "REVIEW FOLLOW-UP & RESPONSE AUTOMATION",
    headline: "Never Lose Another Review Because You Forgot to Ask",
    subheadline:
      "We build and maintain an automated system that asks every customer for a review and automatically posts a response to every review that comes in — every time.",
    priceLabel: "$200/month",
    ctaLabel: "Get Started",
    problem: [
      "Most business owners lose reviews for one simple reason: nobody asked at the right time.",
      "The job gets done, the invoice gets paid, and the follow-up message never gets sent — because there's no system for it, just a mental note that gets forgotten.",
      "Every skipped ask is a review — and a future customer — you don't get.",
    ],
    offerBullets: [
      "A custom automated workflow that triggers a review request after every completed job or purchase",
      "Built to connect with your existing customer or job data — no manual list-building",
      "Live monitoring to confirm requests are actually going out",
      "Automatic public response posted to every review you receive, positive or negative",
      "Ongoing monthly maintenance, so it keeps working as your tools or process change",
    ],
    howItWorks: [
      {
        title: "We Connect to Your Data",
        description:
          "We connect to wherever your customer or job information already lives — your CRM, scheduling tool, invoicing system, or spreadsheet.",
      },
      {
        title: "We Build the Sequence",
        description:
          "We build the automated follow-up sequence that requests a review at the right moment after every job or purchase — no manual sending required.",
      },
      {
        title: "We Monitor and Maintain It",
        description:
          "Every month, we check that requests are going out correctly and fix anything that breaks — so it keeps working without you thinking about it.",
      },
    ],
    included: [
      "Custom-built automated review follow-up workflow, connected to your existing customer/job data",
      "Automatic public response posted to every incoming review — the same standard reply approach regardless of star rating, never selective",
      "Ongoing monitoring to confirm both requests and responses are actually going out",
      "Monthly maintenance and updates",
      "Fixes if something breaks or stops sending",
    ],
    notIncluded: [
      "Building a CRM or job-tracking system from scratch if you don't already track customers/jobs somewhere",
      "Custom, one-off written responses outside the standard automated reply templates",
      "Personally handling reviews that need a real resolution (e.g. a service complaint) — those should be followed up on directly, not through the automated reply",
      "Managing your Google Business Profile or other review platforms directly",
      "One-time setup only — this is billed as an ongoing monthly service, not a single project",
    ],
    faqs: [
      {
        question: "How long until this is up and running?",
        answer:
          "Most workflows are connected and live within 1–2 weeks of getting access to your customer or job data. Timing depends on which tools you're already using.",
      },
      {
        question: "Do I need to sign a contract?",
        answer:
          "No long-term contract. It's billed monthly, and you can cancel anytime — we just ask for notice before the next billing cycle.",
      },
      {
        question: "What if I already tried something like this and it didn't work?",
        answer:
          "Most DIY attempts fail because there's no one checking that it's still running. That's the part we handle — we monitor it every month, so it doesn't quietly break and go unnoticed.",
      },
      {
        question: "What if I don't have a CRM or customer list?",
        answer:
          "We'll work with whatever you have — even a spreadsheet. If you need help getting your customer data organized first, we can quote that separately; it's not included in the $200/month fee.",
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
      "That's a systems problem, not a willpower problem. This service doesn't need another task on your list — it runs in the background, automatically, every time.",
    ],
    finalCtaHeading: "Ready to Stop Losing Reviews?",
    finalCtaSubheading: "Fill out the form below and we'll be in touch to get your automation running.",
  },
  "marketing-management": {
    slug: "marketing-management",
    path: "/lp/marketing-management",
    metaTitle: "Ad Optimization Service | AeroScale",
    metaDescription:
      "We optimize the targeting, messaging, and settings behind your existing ad campaign — $400/month, with ongoing A/B testing and monthly reporting.",
    offerLabel: "Ad Optimization Service",
    eyebrow: "AD OPTIMIZATION SERVICE",
    headline: "Your Ad Isn't the Problem. Who Sees It Is.",
    subheadline:
      "We optimize the targeting, messaging, and settings behind your existing ad campaign — then test it every month to keep improving performance.",
    priceLabel: "$400/month",
    ctaLabel: "Book a Free Call",
    problem: [
      "Most business owners set up an ad campaign once, launch it, and never touch it again.",
      "Meanwhile, the platform's default targeting, the ad copy, and the campaign settings are quietly leaving performance on the table — because nobody is testing or adjusting them.",
      "The ad creative might be great. The setup behind it usually isn't.",
    ],
    offerBullets: [
      "Ongoing optimization of the audience, messaging, and settings behind your existing ad campaign",
      "Continuous A/B testing to find what actually improves performance",
      "A monthly performance report so you can see what changed and why",
      "No creative work — you keep full control of your ad's look and message",
    ],
    howItWorks: [
      {
        title: "Share Campaign Access",
        description:
          "You share access to your existing, already-running ad campaign — we don't build one from scratch.",
      },
      {
        title: "We Optimize the Setup",
        description:
          "We adjust audience targeting, ad copy and messaging, and campaign settings to improve performance.",
      },
      {
        title: "We Test and Report",
        description:
          "We run ongoing A/B tests on targeting, copy, and settings, and send you a monthly performance report.",
      },
    ],
    included: [
      "Audience targeting optimization",
      "Ad copy/messaging optimization",
      "Campaign settings adjustments (budget allocation, bidding, placements)",
      "Ongoing A/B testing of targeting, copy, and settings",
      "Monthly performance reporting",
    ],
    notIncluded: [
      "Ad creative design or production — no images, video, or graphics",
      "Building a campaign from scratch — you must already have an active ad campaign running",
      "Your ad spend/budget — you keep paying the ad platform directly; our fee is separate",
    ],
    faqs: [
      {
        question: "Will you create my ad for me?",
        answer:
          "No. This service optimizes the targeting, messaging, and settings behind an ad campaign you already have running. We don't design, film, or produce ad creative.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most accounts show measurable changes in targeting and performance data within the first 2–4 weeks, as A/B tests start returning results. Meaningful trends usually take a full billing cycle to confirm.",
      },
      {
        question: "Do I need to sign a contract?",
        answer:
          "No long-term contract. It's billed monthly, and you can cancel anytime — we just ask for notice before the next billing cycle.",
      },
      {
        question: "What if I already tried optimizing this myself?",
        answer:
          "That's common — most owners make a few changes early on and then stop testing. We treat optimization as an ongoing process, not a one-time cleanup, which is what tends to move the numbers over time.",
      },
    ],
    trustHeading: "Why We Built This",
    trustBody: [
      "We kept seeing the same pattern: a decent ad, a campaign set up once, and nobody looking at the targeting or testing anything after launch.",
      "That's the part that compounds. A campaign that's actively tested and adjusted every month outperforms one that's left alone — even with the exact same ad creative.",
    ],
    finalCtaHeading: "Ready to Get More From Your Ad Spend?",
    finalCtaSubheading: "Fill out the form below and we'll reach out to schedule a quick call.",
  },
};

export function getLandingPage(slug: LandingPageOfferSlug): LandingPageContent {
  return landingPages[slug];
}
