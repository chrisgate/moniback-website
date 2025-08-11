import Container from "../ui/container";

export default function WhyUseMoniback() {
  return (
    <section className="bg-white">
      <Container className="space-y-[55px] py-[70px] lg:py-[100px]">
        <h2 className="mx-auto max-w-[560px] text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
          Why Use Moniback for Aid Distribution?
        </h2>

        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-Primary-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Digital Distribution
              </p>
              <p className="text-Gray-600 text-base lg:text-lg">
                Send digital vouchers directly to recipients’ phones - fast,
                secure, and paperless.
              </p>
            </div>
          </div>

          <div className="bg-Primary-2-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Local Store Redemption
              </p>
              <p className="text-Gray-600 text-base lg:text-lg">
                Recipients claim their aid through neighborhood stores in the
                Moniback network.
              </p>
            </div>
          </div>

          <div className="bg-Error-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Real-Time Tracking
              </p>
              <p className="text-Gray-600 text-base lg:text-lg">
                Every redemption is verified and tracked with full reporting
                dashboards for your team.
              </p>
            </div>
          </div>

          <div className="bg-Warning-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <div className="space-y-1.5">
              <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
                Dignified Access
              </p>
              <p className="text-Gray-600 text-base lg:text-lg">
                No queues. No waiting. Recipients choose what to redeem and
                when.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
