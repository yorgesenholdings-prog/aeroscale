import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const oneTimeItems = [
  "Business plans",
  "Market research",
  "SOP development",
  "Automation implementation",
  "Marketing strategy",
  "Advertising setup",
  "Data dashboards",
  "Strategic planning",
  "Process redesign",
];

const ongoingItems = [
  "Monthly strategy support",
  "Marketing execution",
  "Advertising management",
  "Reporting and analytics",
  "Automation maintenance",
  "Quarterly planning",
  "Process improvement",
  "Priority-project execution",
  "Owner advisory support",
];

export function EngagementModels() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="FLEXIBLE SUPPORT"
          heading="Bring us one project or make us an extension of your team."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-border-subtle bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-slate">One-Time Projects</h3>
            <ul className="mt-5 flex-1 space-y-3">
              {oneTimeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-primary">
                  <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" className="mt-8">
              Discuss a Project
            </Button>
          </div>

          <div className="flex flex-col rounded-xl bg-brand-slate p-8 text-white shadow-sm">
            <h3 className="text-xl font-bold text-white">Ongoing Support</h3>
            <ul className="mt-5 flex-1 space-y-3">
              {ongoingItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-on-slate" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/services/recurring-business-support" className="mt-8">
              Explore Ongoing Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
