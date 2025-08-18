import Image from "next/image";
import Container from "../ui/container";
import image1 from "/public/images/smiling-woman-receiving-order-from-courier-near-office-building.png";
import image2 from "/public/images/african-american-girl-got-lot-gifts-on-her-birthday.png";
import image3 from "/public/images/happy-african-american-family-unpacking-shopping-bags.png";
import makerIcon from "/public/svgs/maker-(mkr).svg";

export default function OurWhy() {
  return (
    <section>
      <Container className="space-y-10 py-[70px] lg:space-y-[66px] lg:py-[100px]">
        <div className="space-y-2">
          <h2 className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Our Why
          </h2>
          <div className="text-Gray-600 max-w-[792px] space-y-4 text-base lg:text-lg">
            <p>
              We grew up in these communities. We&apos;ve felt the pressure of
              doing more with less. We&apos;ve seen the heartbreak of
              underserved families and overlooked small businesses. And we’ve
              seen how powerful it is when commerce meets compassion.
            </p>
            <p>That&apos;s why Moniback isn’t just about deals. It’s about:</p>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          <div className="bx-shadow-1 min-h-[300px] space-y-5 rounded-[20px] bg-white px-6 py-3.5 lg:min-h-[354px] lg:rounded-[30px] lg:py-5">
            <Image
              src={image1}
              alt="smiling woman receiving order from courier near office building"
              className="h-[190px] w-full rounded-lg object-cover sm:h-[222px]"
            />
            <p className="text-center text-lg font-semibold lg:text-xl">
              Restoring dignity through transparent palliative distribution
            </p>
          </div>

          <div className="bx-shadow-1 min-h-[300px] space-y-5 rounded-[20px] bg-white px-6 py-3.5 lg:min-h-[354px] lg:rounded-[30px] lg:py-5">
            <Image
              src={image2}
              alt="african american girl got lots gifts on her birthday"
              className="h-[190px] w-full rounded-lg object-cover sm:h-[222px]"
            />
            <p className="text-center text-lg font-semibold lg:text-xl">
              Turning rewards into real-world relief
            </p>
          </div>

          <div className="bx-shadow-1 min-h-[300px] space-y-5 rounded-[20px] bg-white px-6 py-3.5 lg:min-h-[354px] lg:rounded-[30px] lg:py-5">
            <Image
              src={image3}
              alt="happy african american family unpacking shopping bags"
              className="h-[190px] w-full rounded-lg object-cover sm:h-[222px]"
            />
            <p className="text-center text-lg font-semibold lg:text-xl">
              Building systems that include those often left out
            </p>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row">
        <div className="flex h-[318px] items-end rounded-[6.31px] bg-[url(/images/loyalty-into-impact.png)] bg-cover bg-no-repeat px-4 py-[18px] lg:h-[505.26px] lg:w-[543.56px] lg:rounded-[10px] lg:px-6 lg:py-8">
          <div className="max-w-[214px] space-y-2 rounded-[10.02px] bg-white px-[15px] py-[18px] lg:max-w-[257px] lg:space-y-2.5 lg:rounded-[12px] lg:px-[18px] lg:py-[22px]">
            <div className="bg-Gray-50 flex size-[41.74px] items-center justify-center rounded-full">
              <Image
                src={makerIcon}
                alt="maker (mkr)"
                className="size-5 lg:size-6"
              />
            </div>

            <p className="text-xs lg:text-sm">
              Our mission is to make giving feel normal, even unavoidable not as
              a guilt trip, but as a joyful, easy act that anyone can do.
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-8 lg:pt-7">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
              Turning Loyalty into Impact
            </p>
            <p className="text-Gray-500 text-lg">
              Every time a user redeems a voucher, every time a business gives
              back — we match it with our own commitment. We’re actively
              dedicating funds to:
            </p>
          </div>

          <ul className="space-y-6 text-base font-medium lg:text-lg">
            <li className="custom-marker">
              Fund meals and medicine for vulnerable groups
            </li>
            <li className="custom-marker">
              Support women- and youth-owned businesses
            </li>
            <li className="custom-marker">
              Distribute transparent, traceable charity through verified vendors
            </li>
            <li className="custom-marker">
              Citizens feel seen, supported, and engaged
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col justify-between gap-x-20 gap-y-8 py-[70px] lg:flex-row">
        <div className="flex-1 space-y-8 lg:pt-7">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
              Giving Through the Ecosystem
            </p>
            <p className="text-Gray-700 text-lg">
              Giving through Moniback is secure, measurable, and community-led:
            </p>
          </div>

          <ul className="space-y-6 text-base font-medium lg:text-lg">
            <li className="custom-marker">
              Powered by Qbicles POS for seamless tracking
            </li>
            <li className="custom-marker">Delivered with care through Buddy</li>
            <li className="custom-marker">
              Backed by real local businesses and merchants
            </li>
          </ul>

          <p className="text-base lg:text-lg">
            No middlemen. No black holes. Just real support flowing to real
            people, in real time.
          </p>
        </div>

        <div className="h-[318px] rounded-[6.31px] bg-[url(/images/volunteers-giving-food.png)] bg-cover bg-no-repeat lg:h-[505.26px] lg:w-[543.56px] lg:rounded-[10px]"></div>
      </Container>

      <div className="min-h-[452px] bg-[url(/images/food-donation-2-mobile.png)] bg-cover bg-no-repeat lg:min-h-[588px] lg:bg-[url(/images/food-donation-2.png)]">
        <Container className="flex min-h-[718px] items-end py-11 lg:py-[74px]">
          <div className="max-w-[580px] space-y-7 rounded-[20px] bg-white px-[30px] py-10 lg:space-y-8">
            <div className="space-y-2">
              <p className="text-2xl font-bold tracking-[-2px] lg:text-[2rem]">
                We Give Because It Works
              </p>
              <p className="text-base lg:text-lg">
                When giving is structured and shared:
              </p>
            </div>

            <ul className="space-y-6 text-sm font-medium lg:text-lg">
              <li className="custom-marker">Local economies grow</li>
              <li className="custom-marker">Trust is built</li>
              <li className="custom-marker">People feel hope again</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
