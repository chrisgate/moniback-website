import Image from "next/image";
import Container from "../ui/container";
import MonibackLogo from "../ui/moniback-logo";
import instagramLogo from "/public/svgs/instagram-logo.svg";
import xLogo from "/public/svgs/x-logo.svg";
import facebookLogo from "/public/svgs/facebook-logo.svg";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer>
      <Container className="space-y-20 py-[52px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-wrap justify-between gap-8 py-4 lg:flex-col">
            <MonibackLogo className="h-[53.54px] w-[140px]" />

            <div className="flex gap-2.5">
              <div className="flex size-[52px] items-center justify-center rounded-full bg-white">
                <Image src={instagramLogo} alt="Instagram logo" />
              </div>
              <div className="flex size-[52px] items-center justify-center rounded-full bg-white">
                <Image src={xLogo} alt="X logo" />
              </div>
              <div className="flex size-[52px] items-center justify-center rounded-full bg-white">
                <Image src={facebookLogo} alt="Facebook logo" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-6">
            <div className="w-[159px] space-y-3 lg:space-y-4">
              <h4 className="text-sm font-medium lg:text-lg lg:font-semibold">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs lg:text-sm">
                <li>About us</li>
                <li>Retailer</li>
                <li>FMCG</li>
                <li>Government</li>
                <li>Charity</li>
              </ul>
            </div>

            <div className="w-[159px] space-y-3 lg:space-y-4">
              <h4 className="text-sm font-medium lg:text-lg lg:font-semibold">
                Useful Links
              </h4>
              <ul className="space-y-2.5 text-xs lg:text-sm">
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="w-full space-y-3 lg:w-[354px] lg:space-y-4">
              <h4 className="text-sm font-medium lg:text-lg lg:font-semibold">
                Newsletter
              </h4>
              <div className="flex flex-col gap-2 lg:flex-row">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="placeholder:text-Gray-300 focus-within:border-Primary-500 border-Gray-100 h-[42px] flex-1 rounded-md border bg-white p-4 py-3 text-sm outline-none"
                />

                <Button className="h-[42px] rounded-md lg:w-[82px]">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-Gray-300 text-Gray-2-500 flex flex-wrap items-center justify-between gap-2.5 border-t pt-8 text-xs lg:text-sm">
          <p className="order-2 lg:order-1">
            © 2025 Moniback. All rights reserved.
          </p>
          <div className="order-1 flex flex-wrap items-center gap-5 lg:order-2">
            <p className="underline underline-offset-2">Terms of service</p>
            <p className="underline underline-offset-2">Privacy policy</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
