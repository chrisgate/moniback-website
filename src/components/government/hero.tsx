import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/ui/container";
import heroImage from "/public/images/government-hero-image.png";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col justify-between gap-x-8 gap-y-[72px] py-[50px] lg:flex-row lg:py-16">
        <div className="space-y-[30px] lg:w-[519px] lg:pt-20">
          <div className="space-y-3 text-center lg:space-y-[18px] lg:text-left">
            <h1 className="text-4xl font-bold tracking-[-1px] lg:text-[4.25rem] lg:leading-[76px] lg:tracking-[-2px]">
              Power Smarter Giving with Moniback
            </h1>
            <p className="text-base lg:max-w-[498px] lg:text-xl">
              Distribute palliatives, subsidies, and incentives with
              transparency through a social platform people already use.
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

        <div className="relative mx-auto aspect-square w-full lg:mx-0 lg:h-[581px] lg:w-[564px]">
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
