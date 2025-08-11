import { Metadata } from "next";
import Hero from "@/components/charity/hero";
import ImpactInfrastructure from "@/components/charity/impact-infrastructure";
import WhyUseMoniback from "@/components/charity/why-use-moniback";
import HowItWorks from "@/components/charity/how-it-works";
import TrustedBy from "@/components/charity/trusted-by";
import ReadyToDeliverSupport from "@/components/charity/ready-to-deliver-support";

export const metadata: Metadata = {
  title: "Charity",
};

export default function page() {
  return (
    <main>
      <Hero />
      <ImpactInfrastructure />
      <WhyUseMoniback />
      <HowItWorks />
      <TrustedBy />
      <ReadyToDeliverSupport />
    </main>
  );
}
