import Container from "@/components/ui/container";

export default function WhoItsFor() {
  return (
    <section className="bg-Gray-800">
      <Container className="space-y-10 py-[70px] lg:space-y-[54px] lg:py-[100px]">
        <div className="text-Gray-25 space-y-2 text-center">
          <h2 className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Who It’s For
          </h2>
          <p className="text-base lg:text-lg">
            Whether you run a corner shop or a growing chain, Moniback helps you
            grow smarter.
          </p>
        </div>

        <div className="space-y-6 text-[1.75rem] font-bold text-white lg:text-[1.875rem]">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="relative flex min-h-[300px] items-end overflow-hidden rounded-[20px] bg-[url(/images/retail-stores.png)] bg-cover bg-no-repeat px-[18px] py-8 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-6">
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
              <p className="relative tracking-[-2px]">Retail stores</p>
            </div>

            <div className="relative flex min-h-[300px] flex-1 items-end overflow-hidden rounded-[20px] bg-[url(/images/inside-of-a-restaurant.png)] bg-cover bg-no-repeat px-[18px] py-8 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-6">
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
              <p className="relative tracking-[-2px]">Restaurants & cafés</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="relative flex min-h-[300px] flex-1 items-end overflow-hidden rounded-[20px] bg-[url(/images/inside-a-supermarket.png)] bg-cover bg-no-repeat px-[18px] py-8 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-6">
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

              <p className="relative tracking-[-2px]">Supermarkets & kiosks</p>
            </div>

            <div className="relative flex min-h-[300px] items-end overflow-hidden rounded-[20px] bg-[url(/images/beauty-store.png)] bg-cover bg-no-repeat px-[18px] py-8 lg:min-h-[354px] lg:w-[38.62%] lg:rounded-[30px] lg:px-6 lg:py-6">
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

              <p className="relative tracking-[-2px]">
                Fashion, beauty & services
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
