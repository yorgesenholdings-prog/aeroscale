import { Stethoscope, PenTool, Hammer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";

const columns = [
  {
    icon: Stethoscope,
    title: "Diagnose",
    description: "Identify the real constraint, missed opportunity, or operational weakness.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Create the strategy, process, system, campaign, plan, or reporting solution.",
  },
  {
    icon: Hammer,
    title: "Implement",
    description: "Help complete the work, coordinate execution, and improve the result over time.",
  },
];

export function BusinessSupport() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="MORE THAN ADVICE"
          heading="A plan is only useful when someone moves it forward."
          supporting="Traditional consulting often ends with recommendations. AeroScale can also help build the systems, documents, campaigns, reporting, research, and processes required to put the strategy into practice."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <IconBadge icon={column.icon} tone="slate" size="lg" />
              <h3 className="mt-4 text-lg font-semibold text-brand-slate">{column.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
