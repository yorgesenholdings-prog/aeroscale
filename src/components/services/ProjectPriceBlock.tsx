import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/config/pricing";

export function ProjectPriceBlock({ price }: { price: number }) {
  return (
    <section className="bg-surface py-10">
      <div className="container-page max-w-3xl">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
              Project fee
            </span>
            <p className="mt-1 text-4xl font-bold text-brand-slate">{formatCurrency(price)}</p>
            <p className="mt-1 text-sm text-text-muted">
              One-time, flat fee. Final scope is confirmed on a free assessment call.
            </p>
          </div>
          <Button href="/contact" size="lg" className="w-full shrink-0 sm:w-auto">
            Start This Project
          </Button>
        </div>
      </div>
    </section>
  );
}
