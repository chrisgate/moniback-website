import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";
import Appstore from "/public/images/app-store-badge.png";
import MobileAppstore from "/public/images/mobile-app-store-badge.png";
import MobileDevices from "/public/images/two-mobile-devices.png";

export default function DownloadApp() {
  return (
    <section className="bg-Primary-500 min-h-[650px]">
      <Container className="flex h-full flex-col items-center gap-8 py-[70px] lg:flex-row lg:justify-between lg:py-[22px]">
        <Image
          src={MobileDevices}
          alt="two mobile devices"
          className="h-[630px] w-[560px] object-cover lg:order-2"
        />

        <div className="w-full max-w-[517px] space-y-8 lg:order-1 lg:space-y-[30px]">
          <div className="space-y-2 text-center lg:space-y-[18px] lg:text-left">
            <h2 className="text-[2.375rem] leading-[66px] font-bold tracking-[-2px] lg:text-[3.625rem]">
              Download the app today
            </h2>
            <p className="text-base leading-[100%] lg:text-xl">
              Unlock discounts, perks, and upgrades you won’t find anywhere
              else.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <Link href="">
              <Image
                src={Appstore}
                alt="Apple app-store"
                className="h-11 w-[132px]"
              />
            </Link>
            <Link href="">
              <Image
                src={MobileAppstore}
                alt="Mobile app-store"
                className="h-11 w-[148.5px]"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
