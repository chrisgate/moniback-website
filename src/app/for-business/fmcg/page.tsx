import { Metadata } from "next";
import Hero from "@/components/for-business/fmcg/hero";
import WeHelpFMCGBrands from "@/components/for-business/fmcg/we-help-fmcg-brands";
import BenefitsForFMCGBrands from "@/components/for-business/fmcg/benefits-for-fmcg-brands";
import HowItWorks from "@/components/for-business/fmcg/how-it-works";
import SuccessStory from "@/components/for-business/fmcg/success-story";
import DriveBrandPerformance from "@/components/for-business/fmcg/drive-brand-performance";

export const metadata: Metadata = {
  title: "FMCG",
};

export default function page() {
  return (
    <main>
      <Hero />
      <WeHelpFMCGBrands />
      <BenefitsForFMCGBrands />
      <HowItWorks />
      <SuccessStory />
      <DriveBrandPerformance />
    </main>
  );
}
