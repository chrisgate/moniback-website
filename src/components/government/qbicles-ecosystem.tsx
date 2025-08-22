import Image from "next/image";
import Container from "../ui/container";
import moniback from "/public/svgs/m-moniback.svg";

export default function QbiclesEcosystem() {
  return (
    <section className="bg-Gray-800">
      <Container className="space-y-14 bg-[url(/images/grid-mask-background.png)] bg-cover bg-no-repeat py-[70px] lg:py-[90px]">
        <div className="space-y-2 text-center">
          <h2 className="text-Gray-25 text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Built on the Qbicles Ecosystem
          </h2>
          <p className="text-Gray-100 text-base lg:text-lg">
            Every voucher, deal, or incentive works seamlessly with:
          </p>
        </div>

        <div className="relative">
          <div className="bg-Primary-500 relative z-[1] mx-auto mb-[70px] flex size-[138px] items-center justify-center rounded-[20px] lg:mb-[90px] lg:size-[179px]">
            <Image
              src={moniback}
              alt="Moniback"
              className="relative h-[67px] w-[82px] lg:h-[87px] lg:w-[106px]"
            />
          </div>

          {/* ==== CENTER BAR ==== */}
          <svg
            className="absolute top-32 left-1/2 -translate-x-1/2 scale-y-150 overflow-hidden lg:top-[179px]"
            width="5"
            height="209"
            viewBox="0 0 5 209"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="pulse-grad-center"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0" stopColor="#c0f103" stopOpacity="0" />
                <stop offset="0.5" stopColor="#c0f103" stopOpacity="1" />
                <stop offset="1" stopColor="#c0f103" stopOpacity="0" />
              </linearGradient>
              <filter id="bar-glow-center">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <mask id="pulse-mask-center">
                <rect
                  x="0"
                  y="-120"
                  width="5"
                  height="40"
                  fill="url(#pulse-grad-center)"
                  className="center-pulse"
                />
              </mask>
            </defs>

            <rect width="5" height="209" fill="white" opacity="0.12" />
            <rect
              width="5"
              height="209"
              fill="#c0f103"
              filter="url(#bar-glow-center)"
              mask="url(#pulse-mask-center)"
            />
          </svg>

          {/* ==== LEFT CURVE ==== */}
          <svg
            className="absolute top-32 left-1/4 -translate-x-1/2 min-[320px]:left-1/3 min-[400px]:left-[38%] sm:left-2/5 lg:top-[179px] lg:left-[45%]"
            width="92"
            height="125"
            viewBox="0 0 92 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pulse-grad-left" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#c0f103" stopOpacity="0" />
                <stop offset="0.5" stopColor="#c0f103" stopOpacity="1" />
                <stop offset="1" stopColor="#c0f103" stopOpacity="0" />
              </linearGradient>
              <filter id="bar-glow-left">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <mask id="pulse-mask-left">
                <rect
                  x="-10"
                  y="-10"
                  width="30"
                  height="30"
                  fill="url(#pulse-grad-left)"
                  className="curve-pulse-left"
                />
              </mask>
            </defs>

            <path
              d="M89.0338 0C89.0338 39 71.6338 54.2 34.0338 55C-3.56617 55.8 3.53351 88.5 3.53352 125"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M89.0338 0C89.0338 39 71.6338 54.2 34.0338 55C-3.56617 55.8 3.53351 88.5 3.53352 125"
              stroke="#c0f103"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#bar-glow-left)"
              mask="url(#pulse-mask-left)"
              fill="none"
            />
          </svg>

          {/* ==== RIGHT CURVE ==== */}
          <svg
            className="absolute top-32 right-1/4 translate-x-1/2 min-[320px]:right-1/3 min-[400px]:right-[38%] sm:right-2/5 lg:top-[179px] lg:right-[45%]"
            width="92"
            height="125"
            viewBox="0 0 92 125"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pulse-grad-right" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#c0f103" stopOpacity="0" />
                <stop offset="0.5" stopColor="#c0f103" stopOpacity="1" />
                <stop offset="1" stopColor="#c0f103" stopOpacity="0" />
              </linearGradient>

              <filter id="bar-glow-right">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <mask id="pulse-mask-right">
                <rect
                  x="-10"
                  y="-10"
                  width="30"
                  height="30"
                  fill="url(#pulse-grad-right)"
                  className="curve-pulse-right"
                />
              </mask>
            </defs>

            <path
              d="M3.0004 0C3.0004 39 20.4004 54.2 58.0004 55C95.6003 55.8 88.5007 88.5 88.5007 125"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="5"
              fill="none"
            />

            <path
              d="M3.0004 0C3.0004 39 20.4004 54.2 58.0004 55C95.6003 55.8 88.5007 88.5 88.5007 125"
              stroke="#c0f103"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#bar-glow-right)"
              mask="url(#pulse-mask-right)"
              fill="none"
            />
          </svg>

          <div className="relative space-y-6">
            <div className="flex justify-center gap-8 md:gap-[116px]">
              <div className="w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
                <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

                <p className="text-center text-base font-medium">
                  Qbicles POS systems in participating stores
                </p>
              </div>

              <div className="w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
                <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

                <p className="text-center text-base font-medium">
                  Verified vendors through Trader (B2B)
                </p>
              </div>
            </div>

            <div className="mx-auto w-[222px] space-y-4 rounded-[10px] bg-white px-5 py-3.5">
              <div className="bg-Primary-700 mx-auto size-3 rotate-[50deg] rounded-[3px]"></div>

              <p className="text-center text-base font-medium">
                Buddy delivery for remote redemption
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
