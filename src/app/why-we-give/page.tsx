import { Metadata } from "next";
import Hero from "@/components/why-we-give/hero";
import OurWhy from "@/components/why-we-give/our-why";
import JoinUs from "@/components/why-we-give/join-us";

export const metadata: Metadata = {
  title: "Why We Give",
};

export default function page() {
  return (
    <main>
      <Hero />
      <OurWhy />
      <JoinUs />
    </main>
  );
}
