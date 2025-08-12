import { Metadata } from "next";
import Hero from "@/components/about-us/hero";
import OurMission from "@/components/about-us/our-mission";
import QbiclesEcosystem from "@/components/about-us/qbicles-ecosystem";
import JoinUs from "@/components/about-us/join-us";

export const metadata: Metadata = {
  title: "About Us",
};

export default function page() {
  return (
    <main>
      <Hero />
      <OurMission />
      <QbiclesEcosystem />
      <JoinUs />
    </main>
  );
}
