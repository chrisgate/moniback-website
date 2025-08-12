"use client";

import { usePathname } from "next/navigation";
import { useMobileNav } from "./mobile-nav-provider";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Container from "../ui/container";

export default function MobileNav() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const { isOpen, setIsOpen } = useMobileNav();

  return (
    <aside
      className={cn(
        "fixed top-[var(--header-height-mobile)] z-10 h-[calc(586px-var(--header-height-mobile))] w-full rounded-br-[30px] rounded-bl-[30px] transition-all duration-300 lg:hidden",
        isOpen ? "left-0" : "-left-full",
        isHomePage ? "bg-Gray-50" : "bg-white",
      )}
    >
      <Container className="flex h-full flex-col gap-[136px] py-6">
        <ul className="space-y-[30px] text-base">
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-Gray-800 py-0 text-base font-normal hover:no-underline data-[state=open]:p-2.5">
                  For Business
                </AccordionTrigger>
                <AccordionContent className="flex flex-col">
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/for-business/retailer"
                    className="px-3.5 py-2.5"
                  >
                    Retailer
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href="/for-business/fmcg"
                    className="px-3.5 py-2.5"
                  >
                    FMCG
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/government"
              className="size-full"
            >
              Government
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/charity"
              className="size-full"
            >
              Charity
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/why-we-give"
              className="size-full"
            >
              Why we give
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href="/about-us"
              className="size-full"
            >
              About us
            </Link>
          </li>
        </ul>

        <Button>Get started</Button>
      </Container>
    </aside>
  );
}
