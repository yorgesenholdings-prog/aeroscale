import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ServicesOverviewGrid } from "@/components/sections/ServicesOverviewGrid";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { Outcomes } from "@/components/sections/Outcomes";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BusinessSupport } from "@/components/sections/BusinessSupport";
import { Evidence } from "@/components/sections/Evidence";
import { ScorecardPromo } from "@/components/sections/ScorecardPromo";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { JsonLd, professionalServiceJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "AeroScale | Small Business Consultant and Growth Support",
  description:
    "AeroScale provides small business consulting, strategy, marketing, systems, SOPs, research, analytics, and implementation support to help owners operate better and grow.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />
      <ServicesOverviewGrid />
      <EngagementModels />
      <PainPoints />
      <Outcomes />
      <ProcessSteps />
      <BusinessSupport />
      <Evidence />
      <ScorecardPromo />
      <HomeFaq />
    </>
  );
}
