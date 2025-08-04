"use client";

import { usePathname } from "next/navigation";
import { useMobileNav } from "../mobile-nav/mobile-nav-provider";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Container from "../ui/container";
import MonibackLogo from "../ui/moniback-logo";
import Hamburger from "./hamburger";

export default function Header() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  const { setIsOpen } = useMobileNav();

  return (
    <header
      className={cn(
        "h-header-mobile lg:h-header sticky top-0 left-0 z-10",
        isHomePage ? "bg-Gray-50" : "bg-white",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <MonibackLogo />
        </Link>

        <div className="hidden items-center gap-16 lg:flex xl:gap-[76px]">
          <nav className="group flex items-center gap-12 text-base">
            <HoverCard openDelay={1}>
              <HoverCardTrigger className="group flex cursor-pointer items-center gap-1">
                <span>For Business</span>
                <ChevronDown className="size-5 transition-transform duration-500 group-data-[state=open]:rotate-180" />
              </HoverCardTrigger>
              <HoverCardContent className="dropdown-shadow flex h-fit w-[172px] flex-col rounded-lg bg-white p-0">
                <Link
                  href="/for-business/retailer"
                  className="px-3.5 py-2.5 text-sm"
                >
                  Retailer
                </Link>
                <Link
                  href="/for-business/fcmg"
                  className="px-3.5 py-2.5 text-sm"
                >
                  FMCG
                </Link>
              </HoverCardContent>
            </HoverCard>
            <Link href="#">Government</Link>
            <Link href="#">Charity</Link>
            <Link href="#">Why we give</Link>
            <Link href="#">About us</Link>
          </nav>

          <Button className="w-[169px]">Get started</Button>
        </div>

        <Hamburger />
      </Container>
    </header>
  );
}
