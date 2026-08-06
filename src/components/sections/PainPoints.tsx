import { Compass, ListTodo, UserPlus, Layers, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const painPoints = [
  {
    icon: Compass,
    title: "You know something needs to improve, but not where to start",
    copy: "Too many problems and opportunities compete for attention, making it difficult to identify the most valuable next step.",
  },
  {
    icon: ListTodo,
    title: "Leads and reviews fall through the cracks",
    copy: "Missed calls go unanswered, new leads go days without a follow-up text, and happy customers never get asked for a review — all while daily operations take priority.",
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
    title: "Old leads and past customers go untouched",
    copy: "Dormant leads and past customers already sitting in your contact list represent real revenue, but reaching back out compliantly takes time no one has.",
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
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.title} index={index}>
              <Card>
                <IconBadge icon={point.icon} />
                <h3 className="mt-4 text-base font-semibold text-brand-slate">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.copy}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-lg font-medium text-brand-slate">
          AeroScale replaces the guesswork with one done-for-you growth system that runs your
          follow-up, reviews, and ad management for you.
        </p>
      </div>
    </section>
  );
}
