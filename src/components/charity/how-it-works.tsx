import Image from "next/image";
import Container from "@/components/ui/container";
import forwardItemIcon from "/public/svgs/forward-item.svg";
import ticketStarIcon from "/public/svgs/ticket-star.svg";
import buildingIcon from "/public/svgs/building.svg";
import routingIcon from "/public/svgs/routing-2.svg";

export default function HowItWorks() {
  return (
    <section className="bg-Gray-25">
      <Container className="flex flex-col items-start gap-x-52 gap-y-10 py-[70px] lg:flex-row lg:py-[100px] xl:gap-x-[226px]">
        <h2 className="text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
          How it works
        </h2>

        <ul className="w-full flex-1 space-y-6 lg:max-w-[580px]">
          <li className="flex items-center gap-4 rounded-[20px] bg-white px-4 py-6 lg:rounded-[30px] lg:px-6 lg:py-6">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={forwardItemIcon}
                alt="forward item"
                className="size-[18.24px] shrink-0 lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Define your support campaign (items, value, target users)
            </h3>
          </li>

          <li className="flex items-center gap-4 rounded-[20px] bg-white px-4 py-6 lg:rounded-[30px] lg:px-6 lg:py-6">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={ticketStarIcon}
                alt="ticket star"
                className="size-[18.24px] shrink-0 lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Moniback sends out mobile vouchers
            </h3>
          </li>

          <li className="flex items-center gap-4 rounded-[20px] bg-white px-4 py-6 lg:rounded-[30px] lg:px-6 lg:py-6">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={buildingIcon}
                alt="building"
                className="size-[18.24px] shrink-0 lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              Recipients visit participating stores to redeem
            </h3>
          </li>

          <li className="flex items-center gap-4 rounded-[20px] bg-white px-4 py-6 lg:rounded-[30px] lg:px-6 lg:py-6">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={routingIcon}
                alt="routing"
                className="size-[18.24px] shrink-0 lg:size-6"
              />
            </div>

            <h3 className="text-xl font-medium tracking-[-1px] lg:text-2xl">
              You track distribution and impact as it happens
            </h3>
          </li>
        </ul>
      </Container>
    </section>
  );
}
