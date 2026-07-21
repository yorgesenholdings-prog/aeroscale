export interface BundleDefinition {
  slug: string;
  name: string;
  description: string;
  /** Slugs of included support services, resolved against config/services.ts. */
  serviceSlugs: string[];
}

export const bundles: BundleDefinition[] = [
  {
    slug: "growth-marketing",
    name: "Growth Marketing Bundle",
    description:
      "Campaigns run, ads get managed, and the automations connecting them stay maintained — covering the full loop from lead generation to follow-up.",
    serviceSlugs: ["marketing-execution", "advertising-management", "automation-maintenance"],
  },
  {
    slug: "strategic-operator",
    name: "Strategic Operator Bundle",
    description:
      "Ongoing direction, big-picture recalibration, and a sounding board whenever you need one — built for owners who want a steady strategic partner.",
    serviceSlugs: ["monthly-strategy-support", "quarterly-planning", "owner-advisory-support"],
  },
  {
    slug: "systems-insights",
    name: "Systems & Insights Bundle",
    description:
      "The business keeps getting more efficient, decisions are backed by real data, and there's dedicated capacity for whatever matters most each month.",
    serviceSlugs: ["process-improvement", "reporting-analytics", "priority-project-execution"],
  },
];

export function getBundleBySlug(slug: string): BundleDefinition | undefined {
  return bundles.find((bundle) => bundle.slug === slug);
}
