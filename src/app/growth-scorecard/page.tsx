import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScorecardApp } from "@/components/scorecard/ScorecardApp";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Free Small Business Growth Scorecard | AeroScale",
  description:
    "Answer a short set of questions to find the weakest link in your business growth system — strategy, marketing, operations, systems, delegation, and reporting.",
  path: "/growth-scorecard",
});

export default function GrowthScorecardPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Growth Scorecard", path: "/growth-scorecard" }]}
      />

      <section className="border-b border-border-subtle bg-white py-14 md:py-20">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            FREE SMALL BUSINESS GROWTH SCORECARD
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Find the weakest link in your business growth system.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Answer a short set of questions to identify where your business may be losing time,
            clarity, consistency, or growth opportunities. Your results appear immediately — no
            email required to see your score.
          </p>
        </div>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <ScorecardApp />
        </div>
      </section>
    </>
  );
}
