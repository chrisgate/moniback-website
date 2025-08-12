import Image from "next/image";
import Container from "../ui/container";
import image1 from "/public/images/nutrition-illustration.png";
import image2 from "/public/images/incentives.png";
import image3 from "/public/images/happy-black-people-having-fun-together.png";
import image4 from "/public/images/neighbors-helping-each-other.png";
import image5 from "/public/images/african-man-in-a-train.png";

export default function UseCases() {
  return (
    <section>
      <Container className="space-y-10 py-[70px] lg:space-y-[55px] lg:py-[100px]">
        <div className="space-y-2 text-center">
          <h2 className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Use Cases
          </h2>
          <p className="text-Gray-500 text-base lg:text-lg">
            Reach Citizens where they already are
          </p>
        </div>

        <div className="lg:space-y-[18px]">
          <div className="border-Gray-50 grid gap-1.5 border-b px-4 py-[30px] lg:grid-cols-[74px_393px_411px_1fr] lg:px-6 lg:py-10">
            <p className="text-[1.875rem] font-bold tracking-[-2px]">1.</p>
            <p className="text-[1.875rem] font-bold tracking-[-2px]">
              Food Subsidies
            </p>
            <p className="text-lg leading-[100%]">
              Partner with small businesses to boost economic activity
            </p>

            <Image
              src={image1}
              alt="nutrition illustration"
              className="mt-3.5 h-[151px] w-full rounded-lg object-cover sm:h-44 sm:rounded-[20px] md:h-56 lg:hidden"
            />
          </div>

          <div className="border-Gray-50 grid gap-1.5 border-b px-4 py-[30px] lg:grid-cols-[74px_393px_411px_1fr] lg:px-6 lg:py-10">
            <p className="text-[1.875rem] font-bold tracking-[-2px]">2.</p>
            <p className="text-[1.875rem] font-bold tracking-[-2px]">
              SME Incentives
            </p>
            <p className="text-lg leading-[100%]">
              Issue digital vouchers for targeted support
            </p>

            <Image
              src={image2}
              alt="incentives"
              className="mt-3.5 h-[151px] w-full rounded-lg object-cover sm:h-44 sm:rounded-[20px] md:h-56 lg:hidden"
            />
          </div>

          <div className="border-Gray-50 grid gap-1.5 border-b px-4 py-[30px] lg:grid-cols-[74px_393px_411px_1fr] lg:px-6 lg:py-10">
            <p className="text-[1.875rem] font-bold tracking-[-2px]">3.</p>
            <p className="text-[1.875rem] font-bold tracking-[-2px]">
              Youth Programs
            </p>
            <p className="text-lg leading-[100%]">
              Track redemptions in real-time
            </p>

            <Image
              src={image3}
              alt="happy black people having fun together"
              className="mt-3.5 h-[151px] w-full rounded-lg object-cover sm:h-44 sm:rounded-[20px] md:h-56 lg:hidden"
            />
          </div>

          <div className="border-Gray-50 grid gap-1.5 border-b px-4 py-[30px] lg:grid-cols-[74px_393px_411px_1fr] lg:px-6 lg:py-10">
            <p className="text-[1.875rem] font-bold tracking-[-2px]">4.</p>
            <p className="text-[1.875rem] font-bold tracking-[-2px]">
              Disaster Relief
            </p>
            <p className="text-lg leading-[100%]">
              Ensure funds reach the right hands
            </p>

            <Image
              src={image4}
              alt="neighbors helping each other"
              className="mt-3.5 h-[151px] w-full rounded-lg object-cover sm:h-44 sm:rounded-[20px] md:h-56 lg:hidden"
            />
          </div>

          <div className="grid gap-1.5 px-4 py-[30px] lg:grid-cols-[74px_393px_411px_1fr] lg:px-6 lg:py-10">
            <p className="text-[1.875rem] font-bold tracking-[-2px]">5.</p>
            <p className="text-[1.875rem] font-bold tracking-[-2px]">
              Fuel or Transport Support
            </p>
            <p className="text-lg leading-[100%]">
              Engage citizens through a familiar platform
            </p>

            <Image
              src={image5}
              alt="african man in a train"
              className="mt-3.5 h-[151px] w-full rounded-lg object-cover sm:h-44 sm:rounded-[20px] md:h-56 lg:hidden"
            />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row">
        <div className="flex h-[318px] items-end rounded-[6.31px] bg-[url(/images/portrait-male-owner.png)] bg-cover bg-no-repeat px-4 py-[18px] lg:h-[505px] lg:w-[543px] lg:rounded-[10px] lg:px-6 lg:py-8">
          <div className="space-y-5 rounded-[10.11px] bg-white px-3.5 py-6 text-xs lg:max-w-[204px] lg:text-sm">
            <p>
              &quot;With Moniback, we could finally track every voucher — and
              verify real redemptions without manual paperwork.&quot;
            </p>
            <p className="font-semibold">State Palliative Committee Member</p>
          </div>
        </div>

        <div className="flex-1 space-y-8 lg:pt-7">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
              Transparent, Traceable, Trustworthy
            </p>
            <p className="text-Gray-500 text-lg">Moniback ensures:</p>
          </div>

          <ul className="space-y-7 text-base font-medium lg:text-lg">
            <li className="custom-marker">Only eligible recipients redeem</li>
            <li className="custom-marker">
              Funds go directly into the economy via local businesses
            </li>
            <li className="custom-marker">
              Government gets full data visibility (without exposing citizen
              privacy)
            </li>
            <li className="custom-marker">
              Citizens feel seen, supported, and engaged
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
