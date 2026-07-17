import { Compass, ListTodo, UserPlus, Layers, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    icon: Compass,
    title: "You know something needs to improve, but not where to start",
    copy: "Too many problems and opportunities compete for attention, making it difficult to identify the most valuable next step.",
  },
  {
    icon: ListTodo,
    title: "Important projects stay unfinished",
    copy: "Business plans, SOPs, campaigns, reporting systems, research, and automation projects remain on the owner's list for months.",
  },
  {
    icon: UserPlus,
    title: "You need expertise, but not another full-time hire",
    copy: "Your business may need specialized help without enough ongoing work to justify building a complete internal department.",
  },
  {
    icon: Layers,
    title: "Growth is creating more complexity",
    copy: "More customers, employees, tools, and responsibilities expose weak systems and inconsistent processes.",
  },
  {
    icon: LineChart,
    title: "You are making decisions without enough information",
    copy: "Scattered data, limited research, and unclear reporting make it harder to confidently decide where to invest time and money.",
  },
];

export function PainPoints() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="WHY OWNERS CALL US"
          heading="You should not have to build an entire department for every business problem."
          supporting="Small business owners are often expected to act as strategist, marketer, operations manager, analyst, process designer, and project manager at the same time. Important work gets delayed because daily operations take priority, and hiring a full-time specialist for every need is rarely practical."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <Card key={point.title}>
              <IconBadge icon={point.icon} />
              <h3 className="mt-4 text-base font-semibold text-brand-slate">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.copy}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-lg font-medium text-brand-slate">
          AeroScale gives small business owners access to practical strategy, specialized
          expertise, and hands-on implementation support.
        </p>
      </div>
    </section>
  );
}
