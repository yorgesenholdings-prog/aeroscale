"use client";

import { useMemo, useRef, useState } from "react";
import { scorecardCategories, scorecardQuestions } from "@/config/scorecard";
import { ScorecardQuestionCard } from "@/components/scorecard/ScorecardQuestionCard";
import { ScorecardResultsView } from "@/components/scorecard/ScorecardResultsView";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { computeScorecardResults, isScorecardComplete, type ScorecardAnswers } from "@/lib/scorecard-scoring";

export function ScorecardApp() {
  const [answers, setAnswers] = useState<ScorecardAnswers>({});
  const [phase, setPhase] = useState<"quiz" | "results">("quiz");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const hasStarted = useRef(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = scorecardQuestions.length;
  const complete = isScorecardComplete(answers);

  const results = useMemo(() => computeScorecardResults(answers), [answers]);

  function handleAnswer(questionId: string, score: number) {
    if (!hasStarted.current) {
      hasStarted.current = true;
      trackEvent("scorecard_started");
    }
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  }

  function handleSeeResults() {
    setAttemptedSubmit(true);
    if (!complete) return;
    trackEvent("scorecard_completed", { overallScore: computeScorecardResults(answers).overallScore });
    setPhase("results");
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }

  if (phase === "results") {
    return (
      <div ref={resultsRef}>
        <ScorecardResultsView results={results} />
      </div>
    );
  }

  return (
    <div>
      <div className="sticky top-16 z-10 -mx-4 mb-8 border-b border-border-subtle bg-white/95 px-4 py-3 backdrop-blur sm:top-20">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-text-primary">
            {answeredCount} of {totalQuestions} answered
          </span>
          <span className="text-text-muted">
            {complete ? "Ready to see your results" : "Answer every question to continue"}
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
          <div
            className="h-full rounded-full bg-brand-teal transition-all"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-12">
        {scorecardCategories.map((category) => (
          <div key={category.key}>
            <h2 className="text-lg font-bold text-brand-slate">{category.label}</h2>
            <div className="mt-4 space-y-4">
              {scorecardQuestions
                .filter((q) => q.category === category.key)
                .map((question, index) => (
                  <ScorecardQuestionCard
                    key={question.id}
                    question={question}
                    index={index + 1}
                    selectedScore={answers[question.id]}
                    onAnswer={handleAnswer}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-border-subtle pt-8">
        {attemptedSubmit && !complete && (
          <p role="alert" className="mb-4 text-sm font-medium text-error">
            Please answer every question before viewing your results.
          </p>
        )}
        <Button size="lg" onClick={handleSeeResults}>
          See My Results
        </Button>
      </div>
    </div>
  );
}
