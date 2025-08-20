export default function WordsFromCustomers() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[766px] lg:grid-cols-2">
        <div className="bg-Gray-25 pt-[70px] pb-[70px]">
          <div className="container mx-auto h-full pr-6 pl-4 lg:pl-10 xl:pl-10 2xl:pl-14">
            <div className="flex h-full max-w-[80rem] flex-col justify-between gap-y-6">
              <h2 className="text-[2.375rem] leading-[100%] font-bold tracking-[-2px] lg:text-5xl">
                Words directly from our Customers
              </h2>

              <div className="max-w-[358px] space-y-2.5 rounded-[30px] bg-white px-6 py-8 lg:py-10">
                <p className="text-2xl leading-[100%] font-bold lg:text-[1.875rem]">
                  Why It Works
                </p>
                <p className="text-sm lg:text-base">
                  Customers are already on their phones, we meet them there. Our
                  loyalty tools are fun, flexible, and feel like social media.
                  You get more foot traffic, bigger baskets, and better
                  retention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-white py-[70px] lg:items-center lg:py-[100px]">
          <div className="no-scrollbar w-full overflow-x-auto px-4 lg:pr-6 xl:pl-56">
            <div className="flex min-h-[calc(364px+2rem)] flex-col items-center gap-2.5 lg:min-h-[calc(456px+2rem)] lg:w-fit lg:flex-row lg:gap-[62px]">
              <div className="flex h-[364px] max-w-[321px] rotate-[-2.58deg] items-end justify-center rounded-[30px] bg-[url('/images/why-it-works-1.png')] bg-cover bg-center bg-no-repeat p-10 lg:h-[456px] lg:max-w-[402px] lg:shrink-0">
                <div className="text-Gray-25 space-y-4">
                  <p className="max-w-[314px] text-[1.375rem] leading-[100%] font-medium">
                    “Moniback helped us increase customer visits by 25% in just
                    3 weeks.”
                  </p>
                  <p className="text-right text-base leading-[100%]">
                    ~ Aisha, Mini-Mart Owner
                  </p>
                </div>
              </div>

              <div className="flex h-[364px] max-w-[321px] items-end justify-center rounded-[30px] bg-[url('/images/why-it-works-1.png')] bg-cover bg-center bg-no-repeat p-10 lg:h-[456px] lg:max-w-[402px] lg:shrink-0">
                <div className="text-Gray-25 rotate-[-3.65deg] space-y-4">
                  <p className="max-w-[314px] text-[1.375rem] leading-[100%] font-medium">
                    “Our customers love playing for rewards. It’s easy and it
                    works.”
                  </p>
                  <p className="text-right text-base leading-[100%]">
                    ~ Uche, Local Café
                  </p>
                </div>
              </div>

              <div className="flex h-[364px] max-w-[321px] rotate-[-4.06deg] items-end justify-center rounded-[30px] bg-[url('/images/why-it-works-3.png')] bg-cover bg-center bg-no-repeat p-10 lg:h-[456px] lg:max-w-[402px] lg:shrink-0">
                <div className="text-Gray-25 space-y-4">
                  <p className="max-w-[314px] text-[1.375rem] leading-[100%] font-medium">
                    “Moniback helped us increase customer visits by 25% in just
                    3 weeks.”
                  </p>
                  <p className="text-right text-base leading-[100%]">
                    ~ Aisha, Mini-Mart Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
