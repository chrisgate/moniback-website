import Image from "next/image";
import Container from "@/components/ui/container";
import cardEditIcon from "/public/svgs/card-edit.svg";
import ticketDiscountIcon from "/public/svgs/ticket-discount.svg";
import exportIcon from "/public/svgs/export.svg";
import profileUserIcon from "/public/svgs/profile-2user.svg";

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-start gap-x-52 gap-y-10 py-[70px] lg:flex-row lg:py-[100px] xl:gap-x-[226px]">
        <h2 className="text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
          How it works
        </h2>

        <ul className="divide-Gray-50 max-w-[580px] flex-1 space-y-3.5 divide-y">
          <li className="flex items-start gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={cardEditIcon}
                alt="card edit"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-medium tracking-[-1px]">
                Sign up your business on Moniback
              </h3>
              <p className="text-Gray-600 text-base">
                No matter the size of your business, Moniback is the perfect
                platform for you to sign up and start maximizing your potential!
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={ticketDiscountIcon}
                alt="ticket discount"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-medium tracking-[-1px]">
                Create a deal from your dashboard
              </h3>
              <p className="text-Gray-600 text-base">
                Design captivating, limited-time promotions that your customers
                can easily browse, redeem, and share.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={exportIcon}
                alt="export"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-medium tracking-[-1px]">
                Upload to Moniback feed
              </h3>
              <p className="text-Gray-600 text-base">
                Customers discover and engage amazing deals right on the feed
                with the Moniback platform!
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4 px-4 pt-5 pb-[34px] lg:px-6 lg:pt-6 lg:pb-[38px]">
            <div className="bg-Gray-50 flex size-[38px] shrink-0 items-center justify-center rounded-full lg:size-[50px]">
              <Image
                src={profileUserIcon}
                alt="profile user"
                className="size-[18.24px] lg:size-6"
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-2xl font-medium tracking-[-1px]">
                Customers visit, claim, and redeem
              </h3>
              <p className="text-Gray-600 text-base">
                Shoppers are invited to explore your store, seize, and enjoy
                exclusive deals crafted just for them by your business.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
