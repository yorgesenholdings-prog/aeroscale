import { scorecardCategories, scorecardQuestions } from "@/config/scorecard";
import type { ScorecardCategoryKey } from "@/types";

export type ScorecardAnswers = Partial<Record<string, number>>;

export interface CategoryScoreResult {
  key: ScorecardCategoryKey;
  label: string;
  score: number;
  relatedServiceSlugs: string[];
}

export interface ScorecardComputedResults {
  overallScore: number;
  categoryScores: CategoryScoreResult[];
  weakestCategories: CategoryScoreResult[];
  recommendedServiceSlugs: string[];
}

const MAX_OPTION_SCORE = 3;

export function computeScorecardResults(answers: ScorecardAnswers): ScorecardComputedResults {
  const categoryScores: CategoryScoreResult[] = scorecardCategories.map((category) => {
    const questionsInCategory = scorecardQuestions.filter((q) => q.category === category.key);
    const total = questionsInCategory.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const max = questionsInCategory.length * MAX_OPTION_SCORE;
    const score = max > 0 ? Math.round((total / max) * 100) : 0;

    return {
      key: category.key,
      label: category.label,
      score,
      relatedServiceSlugs: category.relatedServiceSlugs,
    };
  });

  const totalAnswered = scorecardQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
  const totalMax = scorecardQuestions.length * MAX_OPTION_SCORE;
  const overallScore = totalMax > 0 ? Math.round((totalAnswered / totalMax) * 100) : 0;

  const weakestCategories = [...categoryScores].sort((a, b) => a.score - b.score).slice(0, 3);

  const recommendedServiceSlugs = Array.from(
    new Set(weakestCategories.flatMap((category) => category.relatedServiceSlugs))
  );

  return { overallScore, categoryScores, weakestCategories, recommendedServiceSlugs };
}

export function isScorecardComplete(answers: ScorecardAnswers): boolean {
  return scorecardQuestions.every((q) => typeof answers[q.id] === "number");
}
