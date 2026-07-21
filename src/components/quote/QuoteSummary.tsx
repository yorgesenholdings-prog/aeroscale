import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/config/pricing";
import { trackEvent } from "@/lib/analytics";
import type { QuoteResult, QuoteBillingGroup } from "@/lib/quote-calculator";

interface QuoteSummaryProps {
  result: QuoteResult;
  onRemoveProject: (slug: string) => void;
  onRemoveSupport: (slug: string) => void;
}

function BillingGroupSummary({
  title,
  group,
  discountRate,
  suffix,
  onRemove,
}: {
  title: string;
  group: QuoteBillingGroup;
  discountRate: number;
  suffix: string;
  onRemove: (slug: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-text-muted">{title}</h3>
      <ul className="mt-2 space-y-1.5">
        {group.items.map((item) => (
          <li key={item.slug} className="flex items-center justify-between gap-2 text-sm">
            <span className="text-text-primary">
              {item.name}
              {item.tier && <span className="text-text-muted"> ({item.tier} tier)</span>}
            </span>
            <button
              type="button"
              onClick={() => onRemove(item.slug)}
              aria-label={`Remove ${item.name}`}
              className="shrink-0 rounded p-0.5 text-text-muted hover:text-error"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 space-y-1 border-t border-border-subtle pt-3 text-sm">
        <div className="flex items-center justify-between text-text-muted">
          <span>Subtotal</span>
          <span>
            {formatCurrency(group.subtotal)}
            {suffix}
          </span>
        </div>
        {discountRate > 0 && (
          <div className="flex items-center justify-between text-teal-text">
            <span>Discount ({Math.round(discountRate * 100)}%)</span>
            <span>
              &minus;{formatCurrency(group.discount)}
              {suffix}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between pt-1 text-base font-bold text-brand-slate">
          <span>{title.includes("Recurring") ? "Monthly Recurring Total" : "One-Time Total"}</span>
          <span>
            {formatCurrency(group.total)}
            {suffix}
          </span>
        </div>
      </div>
    </div>
  );
}

export function QuoteSummary({ result, onRemoveProject, onRemoveSupport }: QuoteSummaryProps) {
  const hasSelections = result.selectedCount > 0;

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-brand-slate">Your Estimate</h2>

      {!hasSelections && (
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Select any services on the left to see a running estimate here.
        </p>
      )}

      {hasSelections && (
        <>
          <p className="mt-2 text-sm text-text-muted">
            {result.selectedCount} {result.selectedCount === 1 ? "service" : "services"} selected
            {result.discountRate > 0 && (
              <span className="font-semibold text-teal-text">
                {" "}
                — {Math.round(result.discountRate * 100)}% multi-service discount applied
              </span>
            )}
          </p>

          <div className="mt-5 space-y-6">
            {result.oneTime && (
              <BillingGroupSummary
                title="One-Time Projects"
                group={result.oneTime}
                discountRate={result.discountRate}
                suffix=""
                onRemove={onRemoveProject}
              />
            )}
            {result.recurring && (
              <BillingGroupSummary
                title="Monthly Recurring"
                group={result.recurring}
                discountRate={result.discountRate}
                suffix="/mo"
                onRemove={onRemoveSupport}
              />
            )}
          </div>
        </>
      )}

      <p className="mt-6 border-t border-border-subtle pt-4 text-xs leading-relaxed text-text-muted">
        This is an estimate. Final pricing is confirmed on a free discovery call.
      </p>

      <Button
        href="/contact"
        size="lg"
        className="mt-4 w-full"
        onClick={() => trackEvent("assessment_cta_clicked", { location: "instant_quote" })}
      >
        Book a Discovery Call
      </Button>
    </div>
  );
}
