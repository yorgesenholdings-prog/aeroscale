import type { EvidenceStat } from "@/types";

/**
 * Verified statistics from original, reputable publishers only.
 * Each entry must link directly to the source. If a statistic cannot be
 * verified against its original publisher, do not add it here — the
 * Evidence section renders safely with zero, one, or many entries.
 */
export const evidenceStats: EvidenceStat[] = [
  {
    stat: "33% work more than 50 hours a week",
    description:
      "A third of small business owners report working more than 50 hours a week, and one in four work more than 60 — leaving little time for the strategic and operational projects that keep getting pushed aside.",
    publisher: "SCORE",
    sourceUrl: "https://www.score.org/resource/blog-post/how-hard-small-business-owners-work",
  },
  {
    stat: "51% say regulatory compliance is hindering growth",
    description:
      "Just over half of small businesses say navigating regulatory compliance requirements is negatively affecting their ability to grow.",
    publisher: "U.S. Chamber of Commerce Small Business Index",
    sourceUrl:
      "https://www.uschamber.com/small-business/a-majority-of-small-businesses-say-regulations-are-hindering-growth",
    publishedYear: "2024",
  },
  {
    stat: "Nearly 40% are using or planning to use AI",
    description:
      "Small business respondents to the Federal Reserve's Small Business Credit Survey report using AI or planning to adopt it — reflecting a shift toward more automated, systems-driven operations.",
    publisher: "Federal Reserve Bank of San Francisco / Small Business Credit Survey",
    sourceUrl:
      "https://www.frbsf.org/research-and-insights/publications/community-development-research-briefs/2026/07/ai-adoption-in-small-businesses-2024-sbcs/",
    publishedYear: "2024 SBCS",
  },
];
