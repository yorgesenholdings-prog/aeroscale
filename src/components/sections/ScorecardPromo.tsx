import { ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconBadge } from "@/components/ui/IconBadge";

export function ScorecardPromo() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-border-subtle bg-white p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <IconBadge icon={ClipboardCheck} size="lg" />
            <Eyebrow className="mt-5 block">FREE TOOL</Eyebrow>
            <h2 className="mt-2 text-2xl font-bold text-brand-slate sm:text-3xl">
              What is holding your business back from its next stage of growth?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Complete the free Small Business Growth Scorecard to identify weaknesses and
              opportunities across strategy, marketing, operations, systems, delegation, and
              reporting.
            </p>
          </div>
          <Button href="/growth-scorecard" size="lg" className="shrink-0">
            Take the Free Scorecard
          </Button>
        </div>
      </div>
    </section>
  );
}
