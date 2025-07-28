import Image from "next/image";
import mobileDevice from "/public/images/mobile-device.png";

export default function HowItWorks() {
  return (
    <section className="bg-Gray-800 py-[124px]">
      <div className="container mx-auto space-y-16 px-4 md:px-6">
        <h2 className="text-Gray-25 text-center text-5xl leading-[100%] font-bold tracking-[-2px]">
          How this works
        </h2>

        <div className="flex items-center justify-center gap-[60px] py-[38px]">
          <div className="bg-Primary-300 flex h-[665px] w-[458px] items-end justify-center overflow-hidden rounded-[180px]">
            <Image
              src={mobileDevice}
              alt="mobile device"
              className="h-[614px] w-[300px]"
            />
          </div>

          <div className="text-Gray-25 flex w-full max-w-[565px] items-center gap-[42px] rounded-[60px] bg-white/10 px-[38px] py-[60px] font-bold">
            <p className="text-[6.75rem]">1</p>

            <div className="w-full max-w-[347px] space-y-2.5">
              <p className="text-[2.5rem] text-white">Download app</p>
              <p className="text-xl font-normal">
                Find the best promotions across your favorite brands and stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
