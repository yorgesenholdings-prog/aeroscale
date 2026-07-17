import { z } from "zod";

export const YEARS_IN_BUSINESS_OPTIONS = [
  "Pre-launch",
  "Less than 1 year",
  "1–3 years",
  "4–7 years",
  "8–15 years",
  "15+ years",
] as const;

export const EMPLOYEE_COUNT_OPTIONS = [
  "Just me",
  "2–5",
  "6–15",
  "16–50",
  "51–100",
  "100+",
] as const;

export const ANNUAL_REVENUE_OPTIONS = [
  "Pre-revenue",
  "Under $100,000",
  "$100,000–$499,999",
  "$500,000–$999,999",
  "$1 million–$2.9 million",
  "$3 million–$9.9 million",
  "$10 million+",
  "Prefer not to say",
] as const;

export const SERVICES_REQUESTED_OPTIONS = [
  "Business strategy",
  "Systems and automation",
  "SOPs and processes",
  "Marketing",
  "Advertising",
  "Business plan",
  "Market research",
  "Data analytics",
  "Ongoing business support",
  "Not sure yet",
] as const;

export const ENGAGEMENT_PREFERENCE_OPTIONS = [
  "One-time project",
  "Ongoing support",
  "Either",
  "Not sure",
] as const;

export const DESIRED_TIMING_OPTIONS = [
  "As soon as possible",
  "Within 30 days",
  "Within 1–3 months",
  "More than 3 months",
  "Just researching",
] as const;

const utmSchema = z
  .object({
    utm_source: z.string().max(200).optional(),
    utm_medium: z.string().max(200).optional(),
    utm_campaign: z.string().max(200).optional(),
    utm_term: z.string().max(200).optional(),
    utm_content: z.string().max(200).optional(),
  })
  .optional();

const sharedFields = {
  honeypot: z.string().max(200).optional().default(""),
  submittedAt: z.string().max(60).optional(),
  referrerUrl: z.string().max(500).optional(),
  utm: utmSchema,
};

export const scorecardCategoryResultSchema = z.object({
  key: z.string(),
  label: z.string(),
  score: z.number().min(0).max(100),
});

export const scorecardResultsSchema = z.object({
  overallScore: z.number().min(0).max(100),
  bandLabel: z.string().max(120),
  categoryScores: z.array(scorecardCategoryResultSchema),
  weakestCategories: z.array(z.string()).max(3),
  recommendedServiceSlugs: z.array(z.string()),
});

export const contactFormSchema = z.object({
  formType: z.literal("contact"),
  fullName: z.string().trim().min(1, "Full name is required").max(150),
  workEmail: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  businessName: z.string().trim().min(1, "Business name is required").max(150),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  industry: z.string().trim().min(1, "Industry is required").max(150),
  yearsInBusiness: z.enum(YEARS_IN_BUSINESS_OPTIONS).optional(),
  employeeCount: z.enum(EMPLOYEE_COUNT_OPTIONS, {
    message: "Select the number of employees",
  }),
  annualRevenue: z.enum(ANNUAL_REVENUE_OPTIONS).optional(),
  servicesRequested: z
    .array(z.enum(SERVICES_REQUESTED_OPTIONS))
    .min(1, "Select at least one service"),
  engagementPreference: z.enum(ENGAGEMENT_PREFERENCE_OPTIONS).optional(),
  currentSituation: z.string().trim().min(1, "Tell us what's currently happening").max(3000),
  desiredOutcome: z.string().trim().max(3000).optional().or(z.literal("")),
  desiredTiming: z.enum(DESIRED_TIMING_OPTIONS).optional(),
  consent: z.literal(true, {
    message: "You must agree to be contacted before submitting",
  }),
  ...sharedFields,
});

export const scorecardLeadSchema = z.object({
  formType: z.literal("scorecard"),
  fullName: z.string().trim().min(1, "Full name is required").max(150),
  workEmail: z.string().trim().email("Enter a valid email address").max(200),
  businessName: z.string().trim().min(1, "Business name is required").max(150),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  wantsEmailedResults: z.boolean().default(false),
  wantsAssessment: z.boolean().default(false),
  consent: z.literal(true, {
    message: "You must agree to be contacted before submitting",
  }),
  scorecardResults: scorecardResultsSchema,
  ...sharedFields,
});

export const contactSubmissionSchema = z.discriminatedUnion("formType", [
  contactFormSchema,
  scorecardLeadSchema,
]);

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ScorecardLeadValues = z.infer<typeof scorecardLeadSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
