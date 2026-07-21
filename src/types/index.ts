import type { LucideIcon } from "lucide-react";

/** Top-level engagement category. Every individual service belongs to exactly one. */
export type ServiceCategory = "projects" | "support";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export type PricingTierKey = "base" | "mid" | "high";

/** Monthly price for each of the three recurring support tiers, in whole USD. */
export interface TierPricing {
  base: number;
  mid: number;
  high: number;
}

export interface ServiceDefinition {
  slug: string;
  /** Which top-level category this service lives under: /services/[category]/[slug] */
  category: ServiceCategory;
  name: string;
  shortDescription: string;
  cardDescription: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
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
  /** Flat one-time fee in whole USD. Required for "projects" category services. */
  oneTimePrice?: number;
  /** Three-tier monthly pricing. Required for "support" category services. */
  tierPricing?: TierPricing;
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string, e.g. "2026-07-21". */
  date: string;
  author?: string;
  /** Body content as an array of paragraphs. */
  content: string[];
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
