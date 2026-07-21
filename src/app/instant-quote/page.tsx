import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteCalculator } from "@/components/quote/QuoteCalculator";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Instant Quote | AeroScale",
  description:
    "Build an instant estimate for AeroScale's small business consulting services. Select any combination of one-time projects and recurring support to see live pricing.",
  path: "/instant-quote",
});

export default function InstantQuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Instant Quote", path: "/instant-quote" }]} />

      <section className="border-b border-border-subtle bg-white py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            INSTANT QUOTE
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Build your own estimate.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Select any combination of one-time projects and recurring support services below.
            Your estimate updates instantly, including the multi-service discount if it applies —
            2&ndash;3 services get 10% off, 4 or more get 20% off.
          </p>
        </div>
      </section>

      <section className="bg-surface py-10 md:py-16">
        <div className="container-page">
          <QuoteCalculator />
        </div>
      </section>
    </>
  );
}
