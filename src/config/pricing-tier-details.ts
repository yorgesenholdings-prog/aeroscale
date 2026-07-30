import { landingPages } from "@/config/landing-pages";
import type { PricingTierSlug } from "@/config/pricing-tiers";

export interface TierComponentDetail {
  name: string;
  included: string[];
  notIncluded: string[];
}

const missedCallTextBack: TierComponentDetail = {
  name: "Missed Call Text-Back",
  included: [
    "Automatic SMS trigger on any missed inbound call",
    "Customizable text template",
    "Near-instant send",
    "Routes into the same GHL contact/lead record as everything else",
    "Basic reporting (missed calls captured, response rate)",
  ],
  notIncluded: [
    "Calling the lead back",
    "Handling the conversation beyond the initial text — that escalates into Tier 2's AI Lead Nurturing or Tier 3's AI Receptionist",
  ],
};

const databaseReactivation: TierComponentDetail = {
  name: "Database Reactivation",
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
};

const aiLeadNurturing: TierComponentDetail = {
  name: "AI Lead Nurturing",
  included: [
    "Auto-response target under 5 minutes via SMS/email",
    "Automated follow-up sequence (e.g., day 1/3/7 touches) for non-responders",
    "Automated booking handoff",
    "Escalation notification to you when a lead is ready or needs a human",
  ],
  notIncluded: [
    "Live human chat — this is automated messaging, not a staffed inbox",
    "Lead generation itself — nurtures leads you already have",
  ],
};

const aiReceptionist: TierComponentDetail = {
  name: "AI Receptionist/Intake",
  included: [
    "AI voice on your existing number or a new tracking number (your choice)",
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
};

const fullRemarketingSequences: TierComponentDetail = {
  name: "Full Remarketing Sequences",
  included: [
    "Cold-lead re-engagement sequences",
    "Post-purchase / repeat-business sequences",
    "Coordination with the Ad Optimization retargeting audience",
    "Quarterly sequence refresh (updated offers/messaging)",
  ],
  notIncluded: ["New ad creative for remarketing — existing creative is reused/retargeted, not redesigned"],
};

const coachingConsulting: TierComponentDetail = {
  name: "Coaching/Consulting",
  included: [
    "Recurring monthly 1:1 call (30–45 min) reviewing performance across all systems, plus general growth advice",
    "Async access for quick questions between calls (reasonable response window, not real-time)",
  ],
  notIncluded: [
    "Hands-on implementation outside existing system scope — not a hiring, financial, or legal advisor",
    "Guaranteed outcomes tied to advice given",
  ],
};

const referralProgramAutomation: TierComponentDetail = {
  name: "Referral Program Automation",
  included: [
    "Automated referral ask, triggered off a schedule or a positive event (e.g., after a completed job)",
    "Unique referral link/code per customer for tracking",
    "Notification to you when a referral converts",
    "Basic reporting (asks sent, referrals generated, conversions)",
  ],
  notIncluded: [
    "Reward/incentive fulfillment — you handle giving out the actual discount or gift; AeroScale automates the ask and tracks attribution",
    "Complex multi-tier incentive structures beyond one standard offer",
  ],
};

function fromStandaloneOffer(slug: "automation" | "marketing-management"): TierComponentDetail {
  const offer = landingPages[slug];
  return { name: offer.offerLabel, included: offer.included, notIncluded: offer.notIncluded };
}

/** Components newly added at each tier (not the full cumulative list — that's already on the tier card). */
export const tierComponentDetails: Record<PricingTierSlug, TierComponentDetail[]> = {
  foundation: [
    fromStandaloneOffer("automation"),
    fromStandaloneOffer("marketing-management"),
    missedCallTextBack,
  ],
  "growth-system": [databaseReactivation, aiLeadNurturing],
  "full-system": [aiReceptionist, fullRemarketingSequences, coachingConsulting, referralProgramAutomation],
};
