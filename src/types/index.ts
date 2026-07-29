export interface FaqItem {
  question: string;
  answer: string;
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
}
