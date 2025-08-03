import Container from "@/components/ui/container";

export default function WordsFromCustomers() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-Gray-25 pt-[70px] pb-[70px] lg:pt-[100px]">
        <Container className="space-y-6 lg:space-y-[236px]">
          <h2 className="text-[2.375rem] font-bold tracking-[-2px] lg:text-5xl">
            Words directly from our Customers
          </h2>

          <div className="max-w-[358px] space-y-2.5 rounded-[30px] bg-white px-6 py-8 lg:py-10">
            <p className="text-2xl font-bold lg:text-[1.875rem]">
              Why It Works
            </p>
            <p className="text-sm lg:text-base">
              Customers are already on their phones, we meet them there. Our
              loyalty tools are fun, flexible, and feel like social media. You
              get more foot traffic, bigger baskets, and better retention.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-white pt-[100px] pb-[70px]">
        <Container className="flex">
          <div></div>
        </Container>
      </div>
    </section>
  );
}
