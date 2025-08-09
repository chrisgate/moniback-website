import Image from "next/image";
import Container from "@/components/ui/container";
import image1 from "/public/images/black-woman-with-a-gift-smiling.png";

export default function BenefitsForFMCGBrands() {
  return (
    <section className="bg-Gray-25">
      <Container className="space-y-6 py-[70px] lg:py-[100px]">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="min-h-[343px] rounded-[20px] bg-white px-5 py-5 lg:min-h-[354px] lg:rounded-[30px] lg:px-6 lg:py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] leading-[100%] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Move More Product
              </p>
              <p className="text-Gray-600 text-lg font-semibold">
                Create gamified offers that reward customers for buying your
                products in participating stores.
              </p>
            </div>
          </div>

          <div className="flex min-h-[343px] items-end justify-center rounded-[20px] bg-[url(/images/round-spiral.png)] bg-cover bg-no-repeat px-5 lg:min-h-[354px] lg:rounded-[30px] lg:px-6">
            <Image src={image1} alt="black woman with a gift smiling" />
          </div>

          <div className="min-h-[343px] rounded-[20px] bg-white px-5 py-5 lg:min-h-[354px] lg:rounded-[30px] lg:px-6 lg:py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] leading-[100%] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Own the Loyalty Feed
              </p>
              <p className="text-Gray-600 text-lg font-semibold">
                Your brand shows up in Moniback’s scrollable feed right where
                consumers are already paying attention.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="relative flex min-h-[300px] flex-1 items-end overflow-hidden rounded-[20px] bg-[url(/images/retail-stores.png)] bg-cover bg-no-repeat px-[18px] py-8 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-6">
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Masked blur layer */}
            <div
              className="absolute -bottom-1 left-0 h-1/2 w-full backdrop-blur-sm lg:h-1/3"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
              }}
            ></div>

            <div className="relative space-y-1.5 text-white">
              <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Drive Basket Value
              </p>
              <p className="max-w-[424px] text-base lg:text-lg">
                Encourage multi-pack or combo purchases with reward incentives.
              </p>
            </div>
          </div>

          <div className="bg-Primary-500 min-h-[343px] rounded-[20px] bg-[url(/images/bright-yellow-ellipse-2.png)] bg-bottom bg-no-repeat px-5 py-5 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] leading-[100%] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Real-Time Redemption Data
              </p>
              <p className="text-Gray-700 text-lg font-semibold">
                Track what’s selling, where, and when all in one dashboard
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
