import Image from "next/image";
import Container from "../ui/container";
import mobileDevice from "/public/images/mobile-device.png";

export default function HowItWorks() {
  return (
    <section className="bg-Gray-800 py-[124px]">
      <Container className="space-y-10 lg:space-y-16">
        <h2 className="text-Gray-25 text-center text-[2.375rem] leading-[100%] font-bold tracking-[-2px] md:text-5xl">
          How this works
        </h2>

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[60px] lg:py-[38px]">
          <div className="bg-Primary-300 flex h-[502px] w-full max-w-[342px] items-end justify-center overflow-hidden rounded-[134.41px] lg:h-[665px] lg:max-w-[458px] lg:rounded-[180px]">
            <Image
              src={mobileDevice}
              alt="mobile device"
              className="h-[459.1px] w-[224.31px] lg:h-[614px] lg:w-[300px]"
            />
          </div>

          <div className="text-Gray-25 flex w-full max-w-[565px] items-center gap-4 rounded-[20px] bg-white/10 px-4 py-10 font-bold lg:gap-[42px] lg:rounded-[60px] lg:px-[38px] lg:py-[60px]">
            <p className="text-[3.625rem] lg:text-[6.75rem]">1</p>

            <div className="w-full max-w-[347px] space-y-2.5">
              <p className="text-[1.75rem] text-white lg:text-[2.5rem]">
                Download app
              </p>
              <p className="text-base font-normal lg:text-xl">
                Find the best promotions across your favorite brands and stores.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
