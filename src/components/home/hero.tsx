import { Button } from "../ui/button";
import Image from "next/image";
import Container from "../ui/container";
import deviceImage from "/public/images/hero-device.png";
import giftsImage from "/public/images/hero-plenty-gift-boxes-and-bags.png";
import womanSmilingImage from "/public/images/hero-black-woman-smiling.png";
import handlHoldingGiftImage from "/public/images/hero-hand-holding-gift-box.png";
import restaurantImage from "/public/images/hero-minimalistic-restaurant.png";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(947px-var(--header-height))] flex-col justify-between gap-y-[60px] overflow-hidden">
      <Container className="flex flex-col items-center gap-y-[30px] pt-12 lg:pt-20">
        <div className="mx-auto max-w-[781px] space-y-[18px] text-center">
          <h1 className="text-4xl font-bold tracking-[-1px] lg:text-[4.24rem] lg:leading-[76px] lg:tracking-[-2px]">
            Big Savings on the Brands you Love
          </h1>
          <p className="mx-auto max-w-[420px] text-lg leading-[100%] text-pretty lg:text-xl">
            Find the best promotions across your favorite brands and stores.
          </p>
        </div>

        <Button className="w-[170px]">Get the app</Button>
      </Container>

      <div className="flex items-end justify-between gap-3 md:gap-[22px]">
        <Image
          src={giftsImage}
          alt="plenty gift boxes and shopping bags"
          className="h-3/5 w-[143px] rounded-tr-[15.93px] object-cover md:w-[270px] md:rounded-tr-[30px] xl:w-[19.57%]"
        />
        <Image
          src={womanSmilingImage}
          alt="image of black woman smiling holding her phone"
          className="h-4/5 w-[143px] rounded-tl-[15.93px] rounded-tr-[15.93px] object-cover md:w-[270px] md:rounded-tl-[30px] md:rounded-tr-[30px] xl:w-[19.57%]"
        />
        <Image
          src={deviceImage}
          alt="device"
          className="w-[159px] object-cover md:w-[300px] xl:w-[21.74%]"
        />
        <Image
          src={handlHoldingGiftImage}
          alt="hand holding gift box"
          className="h-4/5 w-[143px] rounded-tl-[15.93px] rounded-tr-[15.93px] object-cover md:w-[270px] md:rounded-tl-[30px] md:rounded-tr-[30px] xl:w-[19.57%]"
        />
        <Image
          src={restaurantImage}
          alt="minimalistic restaurant"
          className="h-3/5 w-[143px] rounded-tl-[15.93px] object-cover md:w-[270px] md:rounded-tl-[30px] xl:w-[19.57%]"
        />
      </div>
    </section>
  );
}
