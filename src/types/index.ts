import type { LucideIcon } from "lucide-react";

export type EngagementType = "project" | "recurring" | "either";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceDefinition {
  slug: string;
  name: string;
  shortDescription: string;
  cardDescription: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  engagementType: EngagementType;
  intro: string[];
  problemsSolved: string[];
  specificServices: string[];
  deliverables: string[];
  whoItsFor: string[];
  exampleSituations: string[];
  process: ServiceProcessStep[];
  relatedServiceSlugs: string[];
  faqs: FaqItem[];
  notes?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface EvidenceStat {
  stat: string;
  description: string;
  publisher: string;
  sourceUrl: string;
  publishedYear?: string;
}

export type ScorecardCategoryKey =
  | "strategy"
  | "marketing"
  | "sales"
  | "operations"
  | "sops"
  | "data"
  | "ownerDependence"
  | "growthReadiness";

export interface ScorecardAnswerOption {
  label: string;
  score: number;
}

export interface ScorecardQuestion {
  id: string;
  category: ScorecardCategoryKey;
  prompt: string;
  options: ScorecardAnswerOption[];
}

export interface ScorecardCategoryMeta {
  key: ScorecardCategoryKey;
  label: string;
  relatedServiceSlugs: string[];
}
