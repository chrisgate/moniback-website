import { Button } from "../ui/button";
import Link from "next/link";
import Container from "../ui/container";
import MonibackLogo from "../ui/moniback-logo";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <header className="h-header bg-Gray-50 sticky top-0 left-0">
      <Container className="flex h-full items-center justify-between">
        <MonibackLogo />

        <div className="hidden items-center gap-16 lg:flex xl:gap-[76px]">
          <nav className="flex items-center gap-12 text-base">
            <Link href="">For Business</Link>
            <Link href="">Government</Link>
            <Link href="">Charity</Link>
            <Link href="">Why we give</Link>
            <Link href="">About us</Link>
          </nav>

          <Button className="w-[169px]">Get started</Button>
        </div>

        <Hamburger />
      </Container>
    </header>
  );
}
