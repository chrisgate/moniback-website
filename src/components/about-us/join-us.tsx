import { Button } from "../ui/button";
import Container from "../ui/container";

export default function JoinUs() {
  return (
    <section className="bg-Primary-500">
      <Container className="flex min-h-[375px] flex-col justify-center gap-y-8 py-8 lg:min-h-[459px] lg:gap-y-[30px]">
        <div className="mx-auto max-w-[713px] space-y-2 text-center lg:space-y-[18px]">
          <h1 className="text-[2.375rem] leading-[100%] font-bold tracking-[-2px] lg:text-[3.625rem] lg:leading-[66px]">
            Join Us
          </h1>
          <p className="text-base lg:text-xl">
            Whether you&apos;re a brand, a charity, a government agency, or just
            someone who wants to make a difference there’s a place for you on
            Moniback.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button className="bg-Gray-800 text-Gray-25 w-full px-[30px] lg:w-fit">
            Get started
          </Button>
          <Button variant="secondary" className="w-full px-[21.5px] lg:w-fit">
            Book a Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
