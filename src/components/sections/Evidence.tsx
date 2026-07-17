import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { evidenceStats } from "@/config/evidence";

export function Evidence() {
  return (
    <section className="bg-brand-slate py-16 text-white md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="WHY STRONGER BUSINESS SUPPORT MATTERS"
          heading={<span className="text-white">Why stronger business support matters</span>}
          supporting={
            <span className="text-white/75">
              Independent research consistently points to the same pressures small business
              owners describe to us directly: limited time, growing complexity, and the pull
              toward more systemized, data-informed operations.
            </span>
          }
        />

        {evidenceStats.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {evidenceStats.map((item) => (
              <div key={item.stat} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <p className="text-3xl font-bold text-teal-on-slate">{item.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{item.description}</p>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-teal-on-slate"
                >
                  {item.publisher}
                  {item.publishedYear ? `, ${item.publishedYear}` : ""}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-12 max-w-2xl text-white/80">
            Small business owners consistently describe the same pressures: limited time,
            growing operational complexity, and a need for more systemized, data-informed
            decision-making as the business grows.
          </p>
        )}

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/55">
          Industry and government research reflects general trends among small businesses and
          does not guarantee individual results for any specific business.
        </p>
      </div>
    </section>
  );
}
