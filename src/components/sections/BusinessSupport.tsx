import { Stethoscope, PenTool, Hammer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const columns = [
  {
    icon: Stethoscope,
    title: "Diagnose",
    description: "Identify the real constraint, missed opportunity, or operational weakness.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Configure the Full System's pillars around how your business actually runs.",
  },
  {
    icon: Hammer,
    title: "Implement",
    description: "Launch the system, monitor performance, and keep improving results month over month.",
  },
];

export function BusinessSupport() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="MORE THAN ADVICE"
          heading="A plan is only useful when someone moves it forward."
          supporting="Most agencies stop at a strategy call. AeroScale builds and runs the actual system — the automations, follow-up sequences, and reporting that make the strategy real, not just a recommendation."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {columns.map((column, index) => (
            <ScrollReveal key={column.title} index={index}>
              <IconBadge icon={column.icon} tone="slate" size="lg" />
              <h3 className="mt-4 text-lg font-semibold text-brand-slate">{column.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{column.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
