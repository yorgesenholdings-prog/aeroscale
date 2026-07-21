import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BundleCard } from "@/components/services/BundleCard";
import { bundles } from "@/config/bundles";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Popular Support Bundles | AeroScale",
  description:
    "Popular ways small businesses combine AeroScale's recurring support services, with example Base-tier pricing and the multi-service discount already applied.",
  path: "/bundles",
});

export default function BundlesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Bundles", path: "/bundles" }]} />

      <section className="border-b border-border-subtle bg-white py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
            POPULAR COMBINATIONS
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-slate sm:text-5xl">
            Popular ways to combine ongoing support.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            These are common combinations of AeroScale&apos;s recurring Support services — not fixed
            packages. Use a bundle as a starting point, swap any service out, or build your own
            combination on the{" "}
            <a href="/instant-quote" className="font-semibold text-teal-text hover:text-teal-text-dark">
              Instant Quote
            </a>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="bg-surface py-10">
        <div className="container-page max-w-3xl">
          <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-white p-5">
            <Info size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
            <p className="text-sm leading-relaxed text-text-muted">
              <span className="font-semibold text-text-primary">How the discount works: </span>
              Combine 2&ndash;3 recurring services and get 10% off the combined monthly total.
              Combine 4 or more and get 20% off. The discount applies automatically to whatever
              services you choose — bundled or not.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="THREE MOST POPULAR BUNDLES" heading="Choose a starting combination" />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {bundles.map((bundle) => (
              <BundleCard key={bundle.slug} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-page flex flex-col items-start gap-6 rounded-2xl bg-brand-slate p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want an exact price for your own combination?
            </h2>
            <p className="mt-3 text-white/80">
              Build a custom quote with the services and tiers you actually need.
            </p>
          </div>
          <Button href="/instant-quote" size="lg" className="shrink-0">
            Get an Instant Quote
          </Button>
        </div>
      </section>
    </>
  );
}
