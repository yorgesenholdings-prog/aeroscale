import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact AeroScale",
  description: "Send AeroScale a message and we'll get back to you shortly.",
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
              CONTACT US
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-slate sm:text-4xl">
              What would make your business easier to run or easier to grow?
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Send us a message and we&apos;ll get back to you shortly.
            </p>
            <div className="mt-8 rounded-2xl bg-surface p-5 text-sm text-text-muted">
              Prefer a guided starting point? Try the{" "}
              <a href="/growth-scorecard" className="font-semibold text-teal-text hover:text-teal-text-dark">
                free Growth Scorecard
              </a>{" "}
              instead.
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-6 shadow-[0_1px_3px_rgba(20,20,26,0.04)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
