import Image from "next/image";
import Container from "../ui/container";
import mapLocationIcon from "/public/svgs/map-location.svg";
import shopIcon from "/public/svgs/shop.svg";
import cartIcon from "/public/svgs/cart-large.svg";
import foodIcon from "/public/svgs/food.svg";
import restaurantIcon from "/public/svgs/restaurant.svg";

export default function TrustedBy() {
  return (
    <section className="bg-white">
      <Container className="space-y-8 py-[70px] lg:space-y-[38px] lg:py-12">
        <h2 className="text-center text-base leading-[30px] tracking-[5px] lg:text-xl">
          TRUSTED BY
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-[90px]">
          <div className="w-[162px] space-y-4">
            <div className="bg-Gray-2-50 mx-auto flex size-[114px] items-center justify-center rounded-full lg:size-36">
              <Image
                src={mapLocationIcon}
                alt="map location"
                className="size-[33.25px] lg:size-[42px]"
              />
            </div>
            <p className="text-center text-base">Government agencies</p>
          </div>

          <div className="w-[162px] space-y-4">
            <div className="bg-Gray-2-50 relative mx-auto flex size-[114px] items-center justify-center rounded-full lg:size-36">
              <Image
                src={shopIcon}
                alt="shop"
                className="size-[34.83px] lg:size-11"
              />
              <Image
                src={cartIcon}
                alt="cart"
                className="absolute top-1/2 left-1/2 size-[22.17px] lg:size-7"
              />
            </div>
            <p className="text-center text-base">Food security initiatives</p>
          </div>

          <div className="w-[162px] space-y-4">
            <div className="bg-Gray-2-50 mx-auto flex size-[114px] items-center justify-center rounded-full lg:size-36">
              <Image
                src={foodIcon}
                alt="food"
                className="size-[38px] lg:size-12"
              />
            </div>
            <p className="text-center text-base">Faith-based organizations</p>
          </div>

          <div className="w-[162px] space-y-4">
            <div className="bg-Gray-2-50 mx-auto flex size-[114px] items-center justify-center rounded-full lg:size-36">
              <Image
                src={restaurantIcon}
                alt="restaurant"
                className="size-[33.25px] lg:size-[42px]"
              />
            </div>
            <p className="text-center text-base">Community nonprofits</p>
          </div>
        </div>
      </Container>

      <div className="min-h-[718px] bg-[url(/images/black-woman-in-a-store.png)] bg-cover bg-no-repeat">
        <Container className="flex min-h-[718px] items-end py-[34px] lg:py-11">
          <div className="max-w-[580px] space-y-7 rounded-[20px] bg-white px-[30px] py-10 lg:space-y-8">
            <p className="max-w-[438px] text-2xl font-bold tracking-[-2px] lg:text-[2rem]">
              “We distributed over 10,000 meals with zero loss — and
              strengthened local shopkeepers at the same time.”
            </p>
            <p className="text-right text-base font-medium lg:text-lg">
              — Community Relief Partner
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
