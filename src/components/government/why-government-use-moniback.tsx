import Container from "../ui/container";

export default function WhyGovernmentUseMoniback() {
  return (
    <section>
      <Container className="space-y-[55px] py-[70px] lg:py-[100px]">
        <div className="space-y-2 text-center">
          <h2 className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Why Governments Use Moniback
          </h2>
          <p className="text-Gray-500 text-base lg:text-lg">
            Reach Citizens where they already are
          </p>
        </div>

        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-Primary-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
              App-based platform accessible via smartphones
            </p>
          </div>

          <div className="bg-Primary-2-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
              Voucher-based distribution ensures only intended recipients
              benefit
            </p>
          </div>

          <div className="bg-Error-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
              Built-in location targeting for local rollouts and monitoring
            </p>
          </div>

          <div className="bg-Warning-50 flex min-h-[354px] items-end rounded-[30px] px-6 py-10">
            <p className="text-[1.75rem] font-bold tracking-[-2px] lg:text-[1.875rem]">
              Real-time dashboard for program tracking and impact
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
