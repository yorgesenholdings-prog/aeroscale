import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact a Small Business Consultant | AeroScale",
  description:
    "Tell AeroScale what's happening in your business and what outcome you're working toward. We'll review your request and recommend a practical next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="bg-white py-14 md:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-text">
              GET A FREE BUSINESS ASSESSMENT
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-slate sm:text-4xl">
              What would make your business easier to run or easier to grow?
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Tell us what is happening in your business, what you have already tried, and what
              outcome you are working toward. AeroScale will review your request and
              recommend a practical next step.
            </p>
            <div className="mt-8 rounded-xl border border-border-subtle bg-surface p-5 text-sm text-text-muted">
              Prefer a guided assessment instead? Try the{" "}
              <a href="/growth-scorecard" className="font-semibold text-teal-text hover:text-teal-text-dark">
                free Growth Scorecard
              </a>{" "}
              first — your answers can inform this request.
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
