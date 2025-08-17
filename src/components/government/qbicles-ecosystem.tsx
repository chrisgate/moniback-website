import Image from "next/image";
import Container from "../ui/container";
import moniback from "/public/svgs/m-moniback.svg";
import leftCurvedLine from "/public/svgs/left-curve-line.svg";
import middleStarightLine from "/public/svgs/middle-straight-line.svg";
import rightCurvedLine from "/public/svgs/right-curve-line.svg";

export default function QbiclesEcosystem() {
  return (
    <section className="bg-Gray-800">
      <Container className="space-y-14 bg-[url(/images/grid-mask-background.png)] bg-cover bg-no-repeat py-[70px] lg:py-[90px]">
        <div className="space-y-2 text-center">
          <h2 className="text-Gray-25 text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Built on the Qbicles Ecosystem
          </h2>
          <p className="text-Gray-100 text-base lg:text-lg">
            Every voucher, deal, or incentive works seamlessly with:
          </p>
        </div>

        <div className="relative">
          <div className="bg-Primary-500 mx-auto mb-[70px] flex size-[138px] items-center justify-center rounded-[20px] lg:mb-[90px] lg:size-[179px]">
            <Image
              src={moniback}
              alt="Moniback"
              className="relative h-[67px] w-[82px] lg:h-[87px] lg:w-[106px]"
            />
          </div>

          <Image
            src={middleStarightLine}
            alt="straight line in the middle"
            className="absolute top-32 left-1/2 -translate-x-1/2 scale-y-150 lg:top-[179px]"
          />
          <Image
            src={leftCurvedLine}
            alt="left curved line"
            className="absolute top-32 left-2/5 -translate-x-1/2 lg:top-[179px] lg:left-[45%]"
          />
          <Image
            src={rightCurvedLine}
            alt="right curved line"
            className="absolute top-32 right-2/5 translate-x-1/2 lg:top-[179px] lg:right-[45%]"
          />

          <div className="relative space-y-6">
            <div className="flex justify-center gap-8 md:gap-[116px]">
              <div className="w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
                <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

                <p className="text-center text-base font-medium">
                  Qbicles POS systems in participating stores
                </p>
              </div>

              <div className="w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
                <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

                <p className="text-center text-base font-medium">
                  Verified vendors through Trader (B2B)
                </p>
              </div>
            </div>

            <div className="mx-auto w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
              <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

              <p className="text-center text-base font-medium">
                Buddy delivery for remote redemption
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
