import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/ui/container";
import heroImage from "/public/images/retailer-hero.png";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col justify-between gap-x-8 gap-y-[72px] pt-[50px] pb-16 lg:flex-row lg:pb-[88px]">
        <div className="w-full space-y-[30px] lg:w-[638px]">
          <div className="space-y-3 text-center lg:space-y-[18px] lg:text-left">
            <h1 className="text-4xl font-bold tracking-[-1px] lg:text-[4.25rem] lg:leading-[76px] lg:tracking-[-2px]">
              Turn customers into loyal fans with the Loyalty Feed
            </h1>
            <p className="text-base lg:text-xl">
              Gamified deals. Social engagement. Real results. Moniback helps
              your business bring customers back again and again.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <Button className="w-full max-w-[343px] lg:max-w-[130px]">
              Get started
            </Button>
            <Button
              variant="secondary"
              className="w-full max-w-[343px] lg:max-w-[130px]"
            >
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full lg:mx-0 lg:h-[578px] lg:w-[624px]">
          <Image
            src={heroImage}
            alt="hero section image"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
