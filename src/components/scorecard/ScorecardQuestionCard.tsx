import type { ScorecardQuestion } from "@/types";

interface ScorecardQuestionCardProps {
  question: ScorecardQuestion;
  index: number;
  selectedScore: number | undefined;
  onAnswer: (questionId: string, score: number) => void;
}

export function ScorecardQuestionCard({
  question,
  index,
  selectedScore,
  onAnswer,
}: ScorecardQuestionCardProps) {
  return (
    <fieldset className="rounded-xl border border-border-subtle bg-white p-5">
      <legend className="px-1 text-sm font-semibold text-text-primary">
        <span className="text-text-muted">{index}.</span> {question.prompt}
      </legend>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-5">
        {question.options.map((option) => {
          const inputId = `${question.id}-${option.label.replace(/\s+/g, "-").toLowerCase()}`;
          const checked = selectedScore === option.score;
          return (
            <div key={inputId}>
              <input
                type="radio"
                id={inputId}
                name={question.id}
                value={option.score}
                checked={checked}
                onChange={() => onAnswer(question.id, option.score)}
                className="peer sr-only"
              />
              <label
                htmlFor={inputId}
                className="block cursor-pointer rounded-lg border border-border-subtle bg-white px-2.5 py-2 text-center text-xs font-medium text-text-muted transition-colors hover:border-teal-text peer-checked:border-teal-text peer-checked:bg-surface-muted peer-checked:text-brand-slate peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand-teal peer-focus-visible:outline-offset-2"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
