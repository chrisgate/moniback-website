import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-var(--header-height))] pt-20">
      <div className="flex flex-col items-center gap-y-[30px] px-4 md:px-6">
        <div className="mx-auto max-w-[781px] space-y-[18px] text-center">
          <h1 className="text-[4.24rem] leading-[76px] font-bold tracking-[-2px]">
            Big Savings on the Brands you Love
          </h1>
          <p className="mx-auto max-w-[420px] text-xl leading-[100%] text-pretty">
            Find the best promotions across your favorite brands and stores.
          </p>
        </div>

        <Button className="w-[170px]">Get the app</Button>
      </div>
    </section>
  );
}
