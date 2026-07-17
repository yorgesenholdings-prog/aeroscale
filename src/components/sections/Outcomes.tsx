import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const outcomes = [
  "Clearer priorities",
  "Better business decisions",
  "Stronger marketing",
  "More reliable processes",
  "Less repetitive work",
  "Better reporting and visibility",
  "Reduced dependence on the owner",
  "A practical path to growth",
];

export function Outcomes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="THE GOAL"
          heading="A clearer, stronger, and easier-to-run business."
          supporting="Our work is designed to produce useful strategies, systems, research, campaigns, reports, and completed projects—not generic advice that remains unused in a document."
        />

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2.5">
              <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-teal-text" />
              <span className="text-base font-medium text-text-primary">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
