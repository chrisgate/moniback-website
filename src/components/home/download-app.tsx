import Image from "next/image";
import Link from "next/link";
import Appstore from "/public/images/app-store-badge.png";
import MobileAppstore from "/public/images/mobile-app-store-badge.png";
import MobileDevices from "/public/images/two-mobile-devices.png";

export default function DownloadApp() {
  return (
    <section className="bg-Primary-500 min-h-[650px]">
      <div className="container mx-auto flex h-full items-center justify-between px-4 py-[22px] md:px-6">
        <div className="w-full max-w-[517px] space-y-[30px]">
          <div className="space-y-[18px]">
            <h2 className="text-[3.625rem] leading-[66px] font-bold tracking-[-2px]">
              Download the app today
            </h2>
            <p className="text-xl leading-[100%]">
              Unlock discounts, perks, and upgrades you won’t find anywhere
              else.
            </p>
          </div>

          <div className="flex items-center gap-3">
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

        <Image
          src={MobileDevices}
          alt="two mobile devices"
          className="h-[630px] w-[560px]"
        />
      </div>
    </section>
  );
}
