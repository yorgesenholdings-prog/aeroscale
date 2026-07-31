# Onboarding Field Lists

Per-plan intake fields for the real Tally onboarding forms (see `src/config/onboarding.ts` and
`src/app/onboarding/[slug]/page.tsx`). These aren't buildable as an on-site form yet since Tally
doesn't exist, but they shouldn't get lost — build the real forms from this list once a Tally
account exists, then drop the embed URLs into the `onboardingFormEmbed` placeholders in
`src/config/pricing-tiers.ts` and `src/config/landing-pages.ts`.

## Review Follow-Up Automation

- CRM/tool currently used
- How jobs are marked complete today (review-request trigger source)
- Google Business Profile admin access
- Review request timing preference
- Account contacts / users to add

## Ad Optimization Service

- Ad account admin access (platform + login/invite)
- Current campaign(s) and where existing creative assets live
- Monthly ad budget, target audience/geo
- Reporting contact + cadence preference
- Account contacts / users to add

## Foundation

- Everything above (Review + Ad Optimization sections)
- Business phone number for missed-call text-back
- Text-back message template/tone preference

## Growth System

- Everything in Foundation
- Existing contact list export
- Written confirmation: did original intake capture marketing-SMS consent? (required before any
  reactivation SMS runs — compliance-critical, do not skip)
- Lead-escalation routing (who's notified when a lead is ready)
- Booking calendar / availability

## Full System

- Everything in Growth System
- Phone/tracking number for AI Receptionist
- FAQ content for AI script (cap ~15 topics)
- State(s) of operation (for AI-disclosure requirement check)
- Referral program: incentive/reward the client will fulfill, trigger event for the ask
- Coaching call scheduling preference (day/time, cadence)

## Every packet also collects

- Legal business name
- Billing contact
- Authorized signer

(Needed for the service agreement even though it's not automation-specific.)
