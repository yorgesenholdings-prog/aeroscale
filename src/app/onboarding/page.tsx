// Per-plan onboarding field lists (for building the real Tally form later)
// live in /docs/onboarding-field-lists.md — not rendered on-site.
import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { offer } from "@/config/offer";
import { isPlaceholderLink } from "@/lib/checkout";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `Get Started with ${offer.name} | AeroScale`,
  description: `Finish setting up ${offer.name} with AeroScale.`,
  path: "/onboarding",
});

export default function OnboardingPage() {
  const embedIsPlaceholder = isPlaceholderLink(offer.onboardingFormEmbed);

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Onboarding", path: "/onboarding" }]} />

      <section className="bg-white py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">GETTING STARTED</span>
          <h1 className="mt-4 text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] font-bold tracking-[-0.02em] text-brand-slate">
            You&apos;re in — let&apos;s get your {offer.name} set up.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Fill out the form below with a few details about your business so we can start
            building your system.
          </p>

          <div className="mt-10 overflow-hidden rounded-[20px] shadow-[0_1px_3px_rgba(20,20,26,0.04)]">
            {embedIsPlaceholder ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed border-border-subtle bg-surface p-10 text-center">
                <ClipboardCheck size={28} aria-hidden="true" className="text-text-muted" />
                <p className="font-semibold text-brand-slate">Onboarding form not yet configured</p>
                <p className="max-w-sm text-sm text-text-muted">
                  {`This is where the ${offer.name} onboarding form will appear once it's built. In the meantime, reach out and we'll get you set up directly.`}
                </p>
              </div>
            ) : (
              <iframe
                src={offer.onboardingFormEmbed}
                title={`${offer.name} onboarding form`}
                className="h-[800px] w-full border-0"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
