import Container from "../ui/container";

export default function ImpactDrivenMetrics() {
  return (
    <section className="bg-[url(/images/protecting-assets-from-domino-effect.png)] bg-cover bg-no-repeat">
      <Container className="flex min-h-[641px] items-center justify-center">
        <div className="bg-Gray-800/60 text-Gray-25 flex w-full max-w-[580px] flex-col gap-7 rounded-[20px] px-[18px] py-10 backdrop-blur-[30px] lg:px-10 lg:py-10">
          <h2 className="mx-auto max-w-[438px] text-center text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Impact-Driven Metrics
          </h2>

          <ul className="space-y-[22px] text-base font-medium lg:space-y-6 lg:text-lg">
            <li className="custom-marker-2">Track redemption timelines</li>
            <li className="custom-marker-2">
              Filter reports by LGA, ward, or demographic
            </li>
            <li className="custom-marker-2">
              See which vendors support the economy most
            </li>
            <li className="custom-marker-2">
              Eliminate fraud and duplicate claims
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
