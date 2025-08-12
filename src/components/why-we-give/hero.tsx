import Image from "next/image";
import Container from "../ui/container";
import MonibackLogo from "../ui/moniback-logo";
import heroImage1 from "/public/images/why-we-give-hero-image-1.png";
import heroImage2 from "/public/images/why-we-give-hero-image-2.png";
import heroImage3 from "/public/images/why-we-give-hero-image-3.png";

export default function Hero() {
  return (
    <>
      <section>
        <Container className="space-y-[72px] pt-12 md:space-y-0 lg:pt-36">
          <div className="mx-auto max-w-[756px] text-center">
            <h1 className="text-4xl font-bold tracking-[-1px] lg:text-[4.25rem] lg:leading-[76px] lg:tracking-[-2px]">
              The Heart Behind Moniback
            </h1>
            <p className="text-base lg:text-xl">
              Giving Isn’t a Side Project. It’s the Soul of What We Do.
            </p>
          </div>

          <div className="flex items-end justify-between gap-3 lg:gap-14 xl:gap-[132px]">
            <div className="relative h-40 flex-1 overflow-hidden rounded-tl-[8.76px] rounded-tr-[8.76px] lg:h-[400px] lg:rounded-tl-[30px] lg:rounded-tr-[30px]">
              <Image
                src={heroImage1}
                alt="hero 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-32 flex-1 overflow-hidden rounded-tl-[8.76px] rounded-tr-[8.76px] lg:h-80 lg:rounded-tl-[30px] lg:rounded-tr-[30px]">
              <Image
                src={heroImage2}
                alt="hero 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-24 flex-1 overflow-hidden rounded-tl-[8.76px] rounded-tr-[8.76px] lg:h-64 lg:rounded-tl-[30px] lg:rounded-tr-[30px]">
              <Image
                src={heroImage3}
                alt="fresh grocery"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-Gray-25">
        <Container className="flex flex-col justify-center gap-7 py-[70px] lg:flex-row">
          <div className="bg-Primary-500 in-checked: flex min-h-[371px] items-center justify-center rounded-[20px] lg:w-[580px]">
            <MonibackLogo className="h-[100px] w-[202px] lg:h-[134px] lg:w-[278px]" />
          </div>

          <div className="flex min-h-[371px] flex-col items-center justify-center gap-y-4 rounded-[20px] bg-white px-4 py-[30px] text-center text-lg font-medium lg:w-[580px] lg:gap-y-6 lg:px-[50px] lg:text-xl">
            <p>
              At Moniback, we don’t give because it’s good PR. We give because
              it’s who we are.
            </p>
            <p>
              We believe that every business, every receipt, every reward can be
              a vehicle for change. That when people feel seen, when communities
              are supported, and when giving is made effortless, a new kind of
              economy is born. One driven by dignity, empathy, and shared
              success.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
