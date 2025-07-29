import Footer from "@/components/footer/footer";
import DownloadApp from "@/components/home/download-app";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <DownloadApp />
      <Footer />
    </main>
  );
}
