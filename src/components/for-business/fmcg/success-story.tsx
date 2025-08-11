export default function SuccessStory() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[766px] lg:grid-cols-2">
        <div className="bg-Gray-25 pt-[70px] pb-[70px]">
          <div className="container mx-auto h-full pr-6 pl-4 lg:pl-10 xl:pl-10 2xl:pl-14">
            <div className="flex h-full max-w-[438px] flex-col justify-between gap-y-6">
              <h2 className="text-[2.375rem] leading-[100%] font-bold tracking-[-2px] lg:text-5xl">
                Success Story Snapshot
              </h2>

              <div className="max-w-[358px] space-y-2.5 rounded-[30px] bg-white px-6 py-8 lg:py-10">
                <p className="text-2xl leading-[100%] font-bold lg:text-[1.875rem]">
                  Why Moniback?
                </p>
                <ul className="list-disc pl-4 text-sm lg:text-base">
                  <li>Built-in network of verified retailers</li>
                  <li>Low-cost, high-impact digital activations</li>
                  <li>Engages consumers directly, at eye-level</li>
                  <li>Works across general and modern trade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-white py-[70px] lg:items-center lg:py-[100px]">
          <div className="no-scrollbar w-full overflow-x-auto px-4 lg:pr-6 xl:pl-56">
            <div className="flex flex-col items-center gap-2.5 lg:w-fit lg:flex-row lg:gap-[62px]">
              <div className="flex h-[364px] max-w-[321px] items-end justify-center rounded-[30px] bg-[url('/images/why-it-works-1.png')] bg-cover bg-center bg-no-repeat p-10 lg:h-[456px] lg:max-w-[402px] lg:shrink-0">
                <div className="text-Gray-25 rotate-[-2.58deg] space-y-4">
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
                    “Moniback helped us increase customer visits by 25% in just
                    3 weeks.”
                  </p>
                  <p className="text-right text-base leading-[100%]">
                    ~ Aisha, Mini-Mart Owner
                  </p>
                </div>
              </div>

              <div className="flex h-[364px] max-w-[321px] items-end justify-center rounded-[30px] bg-[url('/images/why-it-works-3.png')] bg-cover bg-center bg-no-repeat p-10 lg:h-[456px] lg:max-w-[402px] lg:shrink-0">
                <div className="text-Gray-25 rotate-[-4.06deg] space-y-4">
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
