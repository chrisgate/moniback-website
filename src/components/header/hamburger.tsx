"use client";

import { cn } from "@/lib/utils";
import { useMobileNav } from "../mobile-nav/mobile-nav-provider";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="min-h-[22.87px] lg:hidden"
    >
      <div
        className={cn(
          "bg-Gray-800 after:bg-Gray-800 before:bg-Gray-800 relative h-[1.75px] w-[22.87px] before:absolute before:left-0 before:h-[1.75px] before:w-full after:absolute after:left-0 after:h-[1.75px] after:w-full",
          isOpen
            ? "h-0 before:top-0 before:-rotate-45 after:top-0 after:rotate-45"
            : "before:-top-2 before:rotate-0 after:top-2 after:rotate-0",
        )}
      ></div>
    </button>
  );
}
