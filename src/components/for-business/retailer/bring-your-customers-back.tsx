import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/ui/container";
import giftsWithRibbons from "/public/images/gifts-with-ribbons.png";

export default function BringYourCustomersBack() {
  return (
    <section className="bg-Primary-500">
      <Container className="flex flex-col gap-[52px] py-[70px] lg:flex-row lg:items-center lg:justify-between lg:py-[100px]">
        <div className="flex-1">
          <div className="mx-auto max-w-[557px] space-y-[30px] lg:mx-0">
            <div className="space-y-[18px] text-center lg:text-left">
              <h2 className="text-[2.375rem] leading-[100%] font-bold tracking-[-2px] lg:text-5xl">
                Ready to bring your customers back?
              </h2>
              <p className="text-base leading-[100%] lg:text-xl">
                Start with Moniback — it’s free to try and easy to use.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-normal">
              <Button className="bg-Gray-800 text-Gray-25 w-[130px]">
                Get started
              </Button>
              <Button variant="secondary" className="w-[130px]">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src={giftsWithRibbons}
            alt="gifts with ribbons"
            className="h-[298px] w-[293px] rounded-[31.68px] lg:h-[372px] lg:w-[366px] lg:rounded-[39.57px]"
          />
        </div>
      </Container>
    </section>
  );
}
