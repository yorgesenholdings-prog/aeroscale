// Single source of truth for the AeroScale Full System offer (replaces the
// old 3-tier + 2-standalone-offer config layer). All pillar/FAQ copy below
// is a draft — edit freely.
//
// TODO: replace PLACEHOLDER_* values once Stripe/Tally accounts exist.
// Nothing else in the codebase needs to change.

export type OfferPillarSlug =
  | "website-fix"
  | "database-reactivation"
  | "reputation-manager"
  | "lead-nurturing"
  | "ai-receptionist"
  | "ai-sales-coach"
  | "paid-ads-nurturing";

export type PillarBuildStatus = "built" | "partial" | "not-built";

export interface OfferPillar {
  slug: OfferPillarSlug;
  pillarNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  name: string;
  headline: string;
  body: string;
  buildStatus: PillarBuildStatus;
  /** One-line caption for partial/not-built pillars clarifying exactly what isn't live yet. */
  rollingOutNote?: string;
  included: string[];
  notIncluded: string[];
}

export const pillars: OfferPillar[] = [
  {
    slug: "website-fix",
    pillarNumber: 1,
    name: "Website Fix",
    headline: "A Website That Actually Converts",
    body: "We fix what's costing you visitors — faster mobile load times and a low-friction opt-in in place of a bare contact form, so more traffic turns into leads.",
    buildStatus: "not-built",
    rollingOutNote: "Not yet built — coming soon as part of the Full System.",
    included: [
      "Mobile page-speed optimization on your existing site",
      "A low-friction opt-in form in place of a bare contact form",
    ],
    notIncluded: [
      "A full website redesign or rebuild — this optimizes your existing site, not a new one",
      "Custom design work beyond the speed and opt-in fixes",
    ],
  },
  {
    slug: "database-reactivation",
    pillarNumber: 2,
    name: "Database Reactivation",
    headline: "Wake Up Your Old Leads",
    body: "We automatically re-engage the dormant leads and past customers already sitting in your list, with compliant win-back campaigns that generate bookings before you spend another dollar on ads.",
    buildStatus: "built",
    included: [
      "Contact list import",
      "Consent audit against AeroScale's compliance policy",
      "One written offer/sequence built per list",
      "Campaign deployment",
      "Monthly re-run against newly-inactive contacts (rolling, not a single blast)",
      "Basic results reporting (sends, opens/clicks, bookings)",
    ],
    notIncluded: [
      "Guaranteed response or booking rates",
      "Legal review of your historical consent records — you confirm consent status; AeroScale applies the policy but doesn't audit your paperwork",
      "Cleaning a genuinely unusable list (available as a separate one-time upsell)",
    ],
  },
  {
    slug: "reputation-manager",
    pillarNumber: 3,
    name: "Reputation Manager",
    headline: "Reviews On Autopilot",
    body: "Every completed job automatically triggers a review request, with auto-response and a built-in referral loop that turns happy customers into new business.",
    buildStatus: "partial",
    rollingOutNote:
      "Referral program automation (unique referral links, incentive tracking) is still rolling out — review follow-up and auto-response are live today.",
    included: [
      "Custom-built automated review follow-up workflow, connected to your existing customer/job data",
      "Automatic public response posted to every incoming review — the same standard reply approach regardless of star rating, never selective",
      "Ongoing monitoring to confirm both requests and responses are actually going out",
      "Monthly maintenance and updates",
    ],
    notIncluded: [
      "Custom, one-off written responses outside the standard automated reply templates",
      "Personally handling reviews that need a real resolution (e.g. a service complaint) — those should be followed up on directly, not through the automated reply",
      "Managing your Google Business Profile or other review platforms directly",
      "Referral link tracking and incentive/raffle mechanics — rolling out",
    ],
  },
  {
    slug: "lead-nurturing",
    pillarNumber: 4,
    name: "Website Lead Nurturing",
    headline: "Never Lose A Lead To Silence",
    body: "New leads get an instant automated response and ongoing follow-up until they book — including rescuing appointments before a no-show happens.",
    buildStatus: "partial",
    rollingOutNote:
      "No-show appointment rescue is still rolling out — instant lead follow-up and booking handoff are live today.",
    included: [
      "Auto-response target under 5 minutes via SMS/email",
      "Automated follow-up sequence (e.g., day 1/3/7 touches) for non-responders",
      "Automated booking handoff",
      "Escalation notification to you when a lead is ready or needs a human",
    ],
    notIncluded: [
      "Live human chat — this is automated messaging, not a staffed inbox",
      "Lead generation itself — nurtures leads you already have",
      "No-show rescue (re-engaging booked leads before they miss their appointment) — rolling out",
    ],
  },
  {
    slug: "ai-receptionist",
    pillarNumber: 5,
    name: "AI Receptionist",
    headline: "Someone's Always Answering",
    body: "Missed calls get an instant text-back, and an AI voice line handles FAQs and books consults straight onto your calendar — even after hours.",
    buildStatus: "built",
    included: [
      "Automatic SMS trigger and text-back on any missed inbound call",
      "AI voice line on your existing number or a new tracking number (your choice)",
      "Custom FAQ script built from your provided info (up to ~15 topics)",
      "Automatic calendar booking",
      "Required AI-disclosure language where your state mandates it",
      "Monthly call volume/summary reporting",
    ],
    notIncluded: [
      "Handling complex or sensitive calls (billing disputes, complaints) — these fall back to a message or human transfer",
      "Custom voice/personality design beyond AeroScale's standard options",
      "24/7 live human backup",
    ],
  },
  {
    slug: "ai-sales-coach",
    pillarNumber: 6,
    name: "AI Sales Coach",
    headline: "Sharper Sales Conversations",
    body: "Your team practices real call scenarios and gets objective grading feedback, so every lead gets your strongest pitch — not whoever's having an off day.",
    buildStatus: "not-built",
    rollingOutNote: "Not yet built — coming soon as part of the Full System.",
    included: [
      "Practice call scenarios your team can run through",
      "Objective grading and feedback on call performance",
    ],
    notIncluded: [
      "Live human sales training or coaching calls — this is a practice/feedback tool, not a staffed trainer",
      "Guaranteed close-rate improvements",
    ],
  },
  {
    slug: "paid-ads-nurturing",
    pillarNumber: 7,
    name: "Paid Ads with AI Nurturing",
    headline: "Ads That Get Managed, Not Just Launched",
    body: "Ongoing optimization of your existing ad campaigns — targeting, messaging, and A/B testing — tied directly into the nurturing system above so ad traffic doesn't go cold.",
    buildStatus: "built",
    included: [
      "Audience targeting optimization",
      "Ad copy/messaging optimization",
      "Campaign settings adjustments (budget allocation, bidding, placements)",
      "Ongoing A/B testing of targeting, copy, and settings",
      "Monthly performance reporting",
      "Coordinated with your lead nurturing sequences so ad traffic doesn't go cold",
    ],
    notIncluded: [
      "Ad creative design or production — no images, video, or graphics",
      "Building a campaign from scratch — you must already have an active ad campaign running",
      "Your ad spend/budget — you keep paying the ad platform directly; our fee is separate",
    ],
  },
];

export function getPillar(slug: OfferPillarSlug): OfferPillar | undefined {
  return pillars.find((pillar) => pillar.slug === slug);
}

/** Shared pricing source — every price display on the site reads from here. */
export const offerPricing = {
  standardPriceLabel: "$2,500",
  promoPriceLabel: "$1,199",
  priceSuffix: "/month",
  /** Flip to false to kill the promo everywhere at once: banner disappears, every price display drops the strikethrough. */
  promoActive: true,
};

export const offer = {
  slug: "full-system",
  name: "AeroScale Full System",
  ctaLabel: "Get Started",
  stripePaymentLink: "PLACEHOLDER_STRIPE_LINK_FULL_SYSTEM",
  onboardingFormEmbed: "PLACEHOLDER_TALLY_EMBED_FULL_SYSTEM",
  onboarding: {
    intro: "To get started, we'll need:",
    items: [
      "Access to your Google Business listing",
      "Access to your existing ad account",
      "Your existing contact list",
      "Written confirmation of that list's consent status (see our Database Reactivation compliance policy)",
      "Access to your business phone number",
      "FAQ content for the AI receptionist script",
    ],
  },
};

export const faqs = [
  {
    question: "How does billing work for usage costs like SMS and AI voice minutes?",
    answer:
      "The monthly price covers the system itself. Usage costs — SMS sends, AI voice minutes, phone numbers — are billed separately based on what you actually use, so your base price stays predictable regardless of volume.",
  },
  {
    question: "Do you require a contract?",
    answer:
      "No long-term contract. Billing is monthly, and you can cancel anytime with notice before your next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. The system is built once and deployed the same way for every client, so there's no separate setup charge — the monthly price is everything.",
  },
  {
    question: "What's the difference between a \"Live\" pillar and a \"Rolling Out\" pillar?",
    answer:
      "Live pillars are running for clients today. Rolling Out pillars are being built now and are included in your price from day one — no separate charge when they launch.",
  },
  {
    question: "Is $1,199/month permanent?",
    answer:
      "It's a limited-time promotional price; the standard rate is $2,500/month. We'll notify existing clients before any price change takes effect.",
  },
];
