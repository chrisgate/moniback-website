import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/ui/container";
import image1 from "/public/images/black-woman-holding-a-phone-and-some-shopping-bags.png";

export default function DriveBrandPerformance() {
  return (
    <section className="bg-Primary-500">
      <Container className="flex flex-col gap-[52px] py-[70px] lg:flex-row lg:items-center lg:justify-between lg:py-[100px]">
        <div className="flex-1">
          <div className="mx-auto max-w-[557px] space-y-[30px] lg:mx-0">
            <div className="space-y-[18px] text-center lg:text-left">
              <h2 className="text-[2.375rem] leading-[100%] font-bold tracking-[-2px] lg:text-[3.625rem]">
                Ready to drive brand performance ?
              </h2>
              <p className="text-base leading-[100%] lg:text-xl">
                Let’s build your next activation on Moniback.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-normal">
              <Button className="bg-Gray-800 text-Gray-25 w-full px-[30px] lg:w-fit">
                Launch a campaign
              </Button>
              <Button
                variant="secondary"
                className="w-full px-[21.5px] lg:w-fit"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-[url(/images/bright-yellow-ellipse.png)] bg-cover bg-center bg-no-repeat">
          <Image
            src={image1}
            alt="black woman holding a phone and some shopping bags"
            className="h-[298px] w-[293px] rounded-[31.68px] object-cover lg:h-[372px] lg:w-[366px] lg:rounded-[39.57px]"
          />
        </div>
      </Container>
    </section>
  );
}
