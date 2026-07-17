import type { ScorecardAnswerOption, ScorecardCategoryMeta, ScorecardQuestion } from "@/types";

export const SCORECARD_ANSWER_OPTIONS: ScorecardAnswerOption[] = [
  { label: "Strong and consistent", score: 3 },
  { label: "In place but inconsistent", score: 2 },
  { label: "Mostly manual", score: 1 },
  { label: "Not currently in place", score: 0 },
  { label: "Not sure", score: 0 },
];

export const scorecardCategories: ScorecardCategoryMeta[] = [
  { key: "strategy", label: "Strategy & Planning", relatedServiceSlugs: ["business-strategy"] },
  { key: "marketing", label: "Marketing & Lead Generation", relatedServiceSlugs: ["marketing", "advertising"] },
  { key: "sales", label: "Sales & Follow-Up", relatedServiceSlugs: ["systems-automation"] },
  { key: "operations", label: "Operations & Systems", relatedServiceSlugs: ["systems-automation", "sops-processes"] },
  { key: "sops", label: "SOPs & Delegation", relatedServiceSlugs: ["sops-processes"] },
  { key: "data", label: "Data & Reporting", relatedServiceSlugs: ["data-analytics"] },
  { key: "ownerDependence", label: "Owner Dependence", relatedServiceSlugs: ["sops-processes", "recurring-business-support"] },
  { key: "growthReadiness", label: "Growth Readiness", relatedServiceSlugs: ["business-strategy", "recurring-business-support"] },
];

export const scorecardQuestions: ScorecardQuestion[] = [
  // Strategy & Planning
  {
    id: "strategy-1",
    category: "strategy",
    prompt: "A written strategic plan or clear top priorities for this year",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "strategy-2",
    category: "strategy",
    prompt: "Team-wide clarity on what matters most right now",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "strategy-3",
    category: "strategy",
    prompt: "A regular process for revisiting and adjusting business goals",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Marketing & Lead Generation
  {
    id: "marketing-1",
    category: "marketing",
    prompt: "A consistent marketing calendar or cadence of campaigns",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "marketing-2",
    category: "marketing",
    prompt: "Clear, tested messaging about why customers choose you",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "marketing-3",
    category: "marketing",
    prompt: "A reliable, repeatable source of new leads or inquiries",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Sales & Follow-Up
  {
    id: "sales-1",
    category: "sales",
    prompt: "Fast, consistent follow-up with new leads",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "sales-2",
    category: "sales",
    prompt: "A defined sales process the whole team follows",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "sales-3",
    category: "sales",
    prompt: "Tracking of where leads come from and how they convert",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Operations & Systems
  {
    id: "operations-1",
    category: "operations",
    prompt: "Software and tools that share information without manual re-entry",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "operations-2",
    category: "operations",
    prompt: "Clear ownership over day-to-day operational tasks",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "operations-3",
    category: "operations",
    prompt: "Reliable handoffs between team members and tools",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // SOPs & Delegation
  {
    id: "sops-1",
    category: "sops",
    prompt: "Written SOPs or checklists for key recurring tasks",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "sops-2",
    category: "sops",
    prompt: "Ability for someone else to run daily operations for two weeks",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "sops-3",
    category: "sops",
    prompt: "Consistency in how different employees complete the same task",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Data & Reporting
  {
    id: "data-1",
    category: "data",
    prompt: "An easy way to see how the business is performing this month",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "data-2",
    category: "data",
    prompt: "Low-effort, largely automated reporting",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "data-3",
    category: "data",
    prompt: "Confidence that numbers match across systems",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Owner Dependence
  {
    id: "owner-1",
    category: "ownerDependence",
    prompt: "Ability for the business to make routine decisions without the owner",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "owner-2",
    category: "ownerDependence",
    prompt: "Ability for the business to run smoothly if the owner took a month off",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "owner-3",
    category: "ownerDependence",
    prompt: "Owner's time spent mostly on high-value work, not tasks others could do",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  // Growth Readiness
  {
    id: "growth-1",
    category: "growthReadiness",
    prompt: "Confidence that current systems could handle twice the customers",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "growth-2",
    category: "growthReadiness",
    prompt: "A defined plan for the next stage of growth",
    options: SCORECARD_ANSWER_OPTIONS,
  },
  {
    id: "growth-3",
    category: "growthReadiness",
    prompt: "A team prepared to take on more responsibility as the business grows",
    options: SCORECARD_ANSWER_OPTIONS,
  },
];

export interface ScoreBand {
  min: number;
  max: number;
  label: string;
  description: string;
}

export const scorecardBands: ScoreBand[] = [
  {
    min: 80,
    max: 100,
    label: "Strong foundation",
    description:
      "Your business appears to have many important foundations in place. The next opportunity may be optimization, reporting, or focused growth initiatives.",
  },
  {
    min: 55,
    max: 79,
    label: "Growth friction",
    description:
      "Your business has useful systems and strategies in place, but inconsistency or missing connections may be limiting performance.",
  },
  {
    min: 0,
    max: 54,
    label: "Structural gaps",
    description:
      "Several important business functions may depend too heavily on manual work, unclear processes, or the owner's direct involvement.",
  },
];

export function getScoreBand(score: number): ScoreBand {
  return scorecardBands.find((band) => score >= band.min && score <= band.max) ?? scorecardBands[scorecardBands.length - 1];
}
