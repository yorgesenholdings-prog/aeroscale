import { z } from "zod";

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
});

export const landingPageOfferSlugs = ["automation", "marketing-management"] as const;

export const landingPageLeadSchema = z.object({
  formType: z.literal("landingPage"),
  offerSlug: z.enum(landingPageOfferSlugs),
  offerLabel: z.string().trim().min(1).max(150),
  fullName: z.string().trim().min(1, "Full name is required").max(150),
  workEmail: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  businessName: z.string().trim().min(1, "Business name is required").max(150),
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
  scorecardLeadSchema,
  landingPageLeadSchema,
]);

export type ScorecardLeadValues = z.infer<typeof scorecardLeadSchema>;
export type LandingPageLeadValues = z.infer<typeof landingPageLeadSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
