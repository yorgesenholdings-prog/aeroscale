import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScorecardLeadForm } from "@/components/scorecard/ScorecardLeadForm";
import { getServiceBySlug } from "@/config/services";
import { getScoreBand } from "@/config/scorecard";
import type { ScorecardComputedResults } from "@/lib/scorecard-scoring";

function scoreBarColor(score: number) {
  if (score >= 80) return "bg-brand-teal";
  if (score >= 55) return "bg-brand-slate";
  return "bg-error";
}

export function ScorecardResultsView({ results }: { results: ScorecardComputedResults }) {
  const band = getScoreBand(results.overallScore);
  const recommendedServices = results.recommendedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-border-subtle bg-white p-8 text-center sm:p-10">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
          YOUR RESULTS
        </span>
        <p className="mt-3 text-6xl font-bold text-brand-slate">{results.overallScore}</p>
        <p className="text-sm text-text-muted">out of 100</p>
        <h2 className="mt-4 text-2xl font-bold text-brand-slate">{band.label}</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
          {band.description}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-brand-slate">Category breakdown</h3>
        <div className="mt-4 space-y-4">
          {results.categoryScores.map((category) => (
            <div key={category.key}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-text-primary">{category.label}</span>
                <span className="text-text-muted">{category.score}/100</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={category.score}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${category.label} score`}
                className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-muted"
              >
                <div
                  className={`h-full rounded-full ${scoreBarColor(category.score)}`}
                  style={{ width: `${category.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-brand-slate">
          Your three weakest areas right now
        </h3>
        <p className="mt-1 text-sm text-text-muted">
          These categories scored the lowest and represent the most immediate opportunity.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {results.weakestCategories.map((category) => (
            <li
              key={category.key}
              className="rounded-lg border border-border-subtle bg-surface p-4 text-sm"
            >
              <span className="font-semibold text-brand-slate">{category.label}</span>
              <span className="ml-2 text-text-muted">{category.score}/100</span>
            </li>
          ))}
        </ul>
      </div>

      {recommendedServices.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-brand-slate">Recommended next steps</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {recommendedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border-subtle bg-white p-4 text-sm font-semibold text-brand-slate hover:border-teal-text hover:text-teal-text"
              >
                {service.name}
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <p className="border-t border-border-subtle pt-6 text-xs leading-relaxed text-text-muted">
        The scorecard is an educational assessment, not a guarantee, valuation, financial
        analysis, or substitute for professional legal, accounting, tax, or financial advice.
      </p>

      <div>
        <h3 className="text-lg font-bold text-brand-slate">
          Get your results emailed to you or request a free assessment
        </h3>
        <div className="mt-4">
          <ScorecardLeadForm results={results} band={band} />
        </div>
      </div>
    </div>
  );
}
