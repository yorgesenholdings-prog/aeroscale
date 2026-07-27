export type AnalyticsEventName =
  | "hero_cta_clicked"
  | "service_card_clicked"
  | "assessment_cta_clicked"
  | "scorecard_started"
  | "scorecard_completed"
  | "scorecard_lead_submitted"
  | "contact_form_started"
  | "contact_form_submitted"
  | "contact_form_error"
  | "source_link_clicked"
  | "lp_lead_form_started"
  | "lp_lead_submitted"
  | "lp_lead_error";

export type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

/**
 * Safe no-op analytics abstraction. No analytics provider is wired up by
 * default, so this only logs in development. Swap the body of this
 * function for a real provider call (e.g. a script-tag based tool) when
 * one is added — the event names and call sites elsewhere in the app do
 * not need to change.
 */
export function trackEvent(name: AnalyticsEventName, properties?: AnalyticsProperties): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[analytics] ${name}`, properties ?? {});
  }
}
