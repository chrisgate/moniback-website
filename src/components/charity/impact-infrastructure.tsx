import Container from "../ui/container";

export default function ImpactInfrastructure() {
  return (
    <section className="bg-Primary-300 bg-[url(/images/impact-infrastructure.png)] bg-no-repeat">
      <Container className="flex min-h-[515px] items-center py-16 lg:min-h-[748px] lg:justify-end">
        <p className="w-[632px] text-[2rem] font-bold tracking-[-2px] lg:text-5xl">
          We turn loyalty tech into impact infrastructure enabling governments,
          charities, and NGOs to deliver palliatives and essentials, with
          real-time tracking and local reach.
        </p>
      </Container>
    </section>
  );
}
