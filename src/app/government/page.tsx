import { Metadata } from "next";
import Hero from "@/components/government/hero";
import WhyGovernmentUseMoniback from "@/components/government/why-government-use-moniback";
import UseCases from "@/components/government/use-cases";
import QbiclesEcosystem from "@/components/government/qbicles-ecosystem";
import ImpactDrivenMetrics from "@/components/government/impact-driven-metrics";
import HowItWorks from "@/components/government/how-it-works";
import YourCommunity from "@/components/government/your-community";

export const metadata: Metadata = {
  title: "Government",
};

export default function page() {
  return (
    <main>
      <Hero />
      <WhyGovernmentUseMoniback />
      <UseCases />
      <QbiclesEcosystem />
      <ImpactDrivenMetrics />
      <HowItWorks />
      <YourCommunity />
    </main>
  );
}
