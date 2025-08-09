import Image from "next/image";
import Container from "@/components/ui/container";
import noteIcon from "/public/svgs/note.svg";
import radarIcon from "/public/svgs/radar.svg";
import customerClaimIcon from "/public/svgs/customer-claim.svg";
import chartIcon from "/public/svgs/chart.svg";

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
                src={noteIcon}
                alt="note"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-2xl font-medium tracking-[-1px]">
              Set up your branded offer
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={radarIcon}
                alt="radar"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-2xl font-medium tracking-[-1px]">
              Push it into Moniback’s loyalty feed
            </h3>
          </li>

          <li className="flex items-center gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={customerClaimIcon}
                alt="customer claim"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <h3 className="text-2xl font-medium tracking-[-1px]">
              Customers claim & redeem in-store
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

            <h3 className="text-2xl font-medium tracking-[-1px]">
              Receive live campaign data and insights
            </h3>
          </li>
        </ul>
      </Container>
    </section>
  );
}
