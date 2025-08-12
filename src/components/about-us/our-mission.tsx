import Image from "next/image";
import Container from "../ui/container";
import moniback from "/public/svgs/m-moniback-small.svg";

export default function OurMission() {
  return (
    <>
      <section className="bg-black">
        <Container className="flex min-h-[511px] items-center justify-center py-6">
          <div className="w-full max-w-[580px] space-y-2 rounded-[20px] bg-white px-4 py-[60px] text-center lg:space-y-3.5 lg:px-[50px]">
            <h2 className="text-[1.375rem] font-semibold lg:text-5xl">
              Our Mission
            </h2>
            <p className="text-base font-medium lg:text-lg">
              To use loyalty, social engagement, and everyday commerce to build
              a stronger, more inclusive economy; one deal, one community, one
              act of giving at a time.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
                More Than Transactions
              </p>
              <p className="text-Gray-500 text-base lg:text-lg">
                We help businesses grow through:
              </p>
            </div>

            <ul className="space-y-6 text-base font-medium lg:text-lg">
              <li className="custom-marker">Gamified deals</li>
              <li className="custom-marker">Smart loyalty programs</li>
              <li className="custom-marker">Customer engagement tools</li>
            </ul>
          </div>

          <div className="flex h-[315px] items-end rounded-[6.31px] bg-[url(/images/local-vendor-receiving-merchandise-from-farming-supplier.png)] bg-cover bg-no-repeat px-4 py-[18px] lg:h-[505.26px] lg:w-[543.56px] lg:rounded-[10px] lg:px-8 lg:py-9">
            <div className="space-y-2 rounded-[10.02px] bg-white px-3 py-3.5 lg:space-y-2.5 lg:rounded-[12px] lg:px-[18px] lg:py-[22px]">
              <div className="bg-Gray-50 flex size-[33.16px] items-center justify-center rounded-full lg:size-[50px]">
                <Image
                  src={moniback}
                  alt="Moniback"
                  className="h-[13.09px] w-4 lg:h-[17.3px] lg:w-[21.15px]"
                />
              </div>

              <p className="text-xs lg:text-sm">
                Moniback is a platform where:
              </p>

              <ul className="space-y-2.5 text-[0.625rem] font-medium lg:text-sm">
                <li className="custom-marker">
                  Consumers earn — and give back
                </li>
                <li className="custom-marker">
                  Businesses grow — and participate in real impact
                </li>
                <li className="custom-marker">
                  Governments and NGOs track real-world progress through
                  transparent voucher-based campaigns
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row lg:items-center">
          <div className="h-[315px] bg-[url(/images/giftbox-with-red-ribbon.png)] bg-cover bg-center bg-no-repeat lg:h-[505.26px] lg:w-[543.56px] lg:rounded-[10px]"></div>

          <div className="flex-1 space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
                Giving Is in Our DNA
              </p>
              <p className="text-Gray-500 text-base lg:text-lg">
                We’re not waiting for outside help to make a difference. <br />
                We’re actively dedicating a portion of our own revenue to:
              </p>
            </div>

            <ul className="space-y-6 text-base font-medium lg:text-lg">
              <li className="custom-marker">
                Fund charitable redemptions in underserved communities
              </li>
              <li className="custom-marker">
                Power palliative distributions via trusted stores
              </li>
              <li className="custom-marker">
                Reward generosity through social actions
              </li>
            </ul>

            <p className="text-base lg:text-lg">
              Because trust is built when everyone benefits not just the
              business.
            </p>
          </div>
        </Container>

        <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
                Commerce with a Conscience
              </p>
              <p className="text-Gray-500 text-base lg:text-lg">
                We’re not waiting for outside help to make a difference. We’re
                actively dedicating a portion of our own revenue to:
              </p>
            </div>

            <ul className="space-y-6 text-base font-medium lg:text-lg">
              <li className="custom-marker">
                Every store can be a channel for hope
              </li>
              <li className="custom-marker">
                Every reward can be a chance to uplift
              </li>
              <li className="custom-marker">
                Every consumer can become a catalyst for change
              </li>
            </ul>

            <p className="text-base lg:text-lg">
              Moniback brings charity, loyalty, and community into one seamless
              experience where giving feels as natural as spending.
            </p>
          </div>

          <div className="h-[315px] bg-[url(/images/sustainable-grocery-store-owner.png)] bg-cover bg-no-repeat lg:h-[505.26px] lg:w-[543.56px] lg:rounded-[10px]"></div>
        </Container>
      </section>
    </>
  );
}
