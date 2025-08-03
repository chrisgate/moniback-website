import { Metadata } from "next";
import Hero from "@/components/for-business/retailer/hero";
import KeyBenefits from "@/components/for-business/retailer/key-benefits";
import HowItWorks from "@/components/for-business/retailer/how-it-works";
import WhoItsFor from "@/components/for-business/retailer/who-its-for";
import WordsFromCustomers from "@/components/for-business/retailer/words-from-customers";

export const metadata: Metadata = {
  title: "Retailer",
};

export default function page() {
  return (
    <main>
      <Hero />
      <KeyBenefits />
      <HowItWorks />
      <WhoItsFor />
      <WordsFromCustomers />
    </main>
  );
}
