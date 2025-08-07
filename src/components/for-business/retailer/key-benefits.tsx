import Image from "next/image";
import Container from "@/components/ui/container";
import mobileDeviceImage from "/public/images/key-benefits-device.png";
import streakBonusesImage from "/public/images/streak-bonuses.png";
import promotionDetailsImage from "/public/images/mobile-device-showing-promotion-details.png";

export default function KeyBenefits() {
  return (
    <section>
      <Container className="space-y-10 py-[100px] lg:space-y-[78px]">
        <h2 className="text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
          Key Benefits
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex min-h-[500px] flex-col justify-between gap-6 rounded-[20px] bg-white px-[18px] pt-[30px] lg:min-h-[600px] lg:rounded-[30px] lg:px-6 lg:pt-10">
            <div className="space-y-2.5">
              <h3 className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Post Deals that get Noticed
              </h3>
              <p className="text-Gray-600 text-base">
                Create engaging, time-limited offers your customers can scroll,
                claim, and share — just like social content.
              </p>
            </div>

            <Image
              src={mobileDeviceImage}
              alt="mobile device showing promotion details overview"
              className="mx-auto w-4/5 object-cover"
            />
          </div>

          <div className="flex min-h-[500px] flex-col justify-between gap-6 rounded-[20px] bg-white px-[18px] py-[30px] lg:min-h-[600px] lg:rounded-[30px] lg:px-6 lg:py-10">
            <Image
              src={streakBonusesImage}
              alt="streak bonuses"
              className="w-full object-cover"
            />

            <div className="space-y-2.5">
              <h3 className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Drive Repeat Visits
              </h3>
              <p className="text-Gray-600 text-base">
                Reward loyal customers with cashback, digital stamps, and streak
                bonuses without extra apps or cards.
              </p>
            </div>
          </div>

          <div className="flex min-h-[500px] flex-col justify-between gap-6 rounded-[20px] bg-white px-[18px] pt-[30px] lg:min-h-[600px] lg:rounded-[30px] lg:px-6 lg:pt-10">
            <div className="space-y-2.5">
              <h3 className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Track Performance in Real Time
              </h3>
              <p className="text-Gray-600 text-base">
                Get insights into what’s working: claims, redemptions, store
                visits, and customer habits.
              </p>
            </div>

            <Image
              src={promotionDetailsImage}
              alt="mobile device showing promotion details voucher activity"
              className="mx-auto w-4/5 object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
