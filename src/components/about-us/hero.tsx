import Image from "next/image";
import image1 from "/public/images/young-african-people.png";
import image2 from "/public/images/giftbox-with-red-ribbon.png";
import image3 from "/public/images/pretty-smiling-afro-girl.png";
import image4 from "/public/images/man-hiding-gift-behind-his-back.png";
import image5 from "/public/images/man-using-mobile-phone.png";
import image6 from "/public/images/man-thinking-woman-standing.png";
import Container from "../ui/container";

export default function Hero() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-[1302px] space-y-[30px] px-4 pt-[70px] pb-[70px] lg:px-6 lg:pt-11 lg:pb-[78px]">
          <div className="flex min-h-[250px] justify-between gap-4 sm:gap-8 lg:gap-10">
            <div className="relative mt-auto h-[122px] flex-1 overflow-hidden rounded-md md:h-[298px] lg:mt-20 lg:rounded-[30px]">
              <Image
                src={image1}
                alt="young african people"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[115px] flex-1 overflow-hidden rounded-md md:h-[279px] lg:rounded-[30px]">
              <Image
                src={image2}
                alt="giftbox with red ribbon"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative mt-[68px] h-[115px] flex-1 overflow-hidden rounded-md md:h-[279px] lg:rounded-[30px]">
              <Image
                src={image3}
                alt="pretty smiling afro-girl"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[115px] flex-1 overflow-hidden rounded-md md:h-[279px] lg:rounded-[30px]">
              <Image
                src={image4}
                alt="man hiding gift behind his back"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative mt-auto h-[122px] flex-1 overflow-hidden rounded-md md:h-[298px] lg:mt-20 lg:rounded-[30px]">
              <Image
                src={image5}
                alt="man using mobile phone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="mx-auto max-w-[975px] text-center text-4xl leading-[76px] font-bold tracking-[-1px] lg:text-[4.25rem] lg:tracking-[-2px]">
            We’re Building More Than a Loyalty App. We’re Lifting Communities
          </h1>
        </div>
      </section>

      <section className="bg-Primary-300">
        <Container className="flex flex-col items-center justify-center gap-10 py-[70px] lg:flex-row lg:gap-[90px] lg:py-[100px]">
          <div className="relative h-[357.65px] w-full overflow-hidden sm:h-[531.68px] lg:w-[499px]">
            <Image src={image6} alt="man-thinking and a woman standing" fill />
          </div>

          <div className="space-y-4 text-lg font-semibold tracking-[-1px] lg:w-[480px] lg:space-y-6 lg:text-[1.375rem]">
            <p>
              Moniback started with a simple but powerful belief: businesses can
              succeed while still pursuing a cause.
            </p>
            <p>
              In a world where rewards and deals are often designed just to
              drive sales, we asked: 
            </p>

            <p>What if these same tools could help lift entire communities?</p>
          </div>
        </Container>
      </section>
    </>
  );
}
