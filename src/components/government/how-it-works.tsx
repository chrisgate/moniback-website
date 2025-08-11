import Image from "next/image";
import Container from "@/components/ui/container";
import sendIcon from "/public/svgs/send-square.svg";
import ticketStarIcon from "/public/svgs/ticket-star.svg";
import locationIcon from "/public/svgs/location.svg";
import chartIcon from "/public/svgs/chart-2.svg";
import walletIcon from "/public/svgs/wallet-add.svg";

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-start gap-x-52 gap-y-10 py-[70px] lg:flex-row lg:py-[100px] xl:gap-x-[226px]">
        <h2 className="text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
          How it works
        </h2>

        <ul className="divide-Gray-50 max-w-[580px] flex-1 space-y-3.5 divide-y">
          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={sendIcon}
                alt="send square"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Government uploads beneficiaries + selects vendors
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={ticketStarIcon}
                alt="ticket star"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Moniback issues digital vouchers
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={locationIcon}
                alt="location"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Citizens claim + redeem at verified locations
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={chartIcon}
                alt="chart"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Government tracks usage in real-time
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={walletIcon}
                alt="wallet add"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Vendors are reimbursed quickly and digitally
            </h3>
          </li>
        </ul>
      </Container>
    </section>
  );
}
