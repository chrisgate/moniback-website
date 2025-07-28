import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import MonibackLogo from "/public/svgs/moniback-logo.svg";

export default function Header() {
  return (
    <header className="h-header sticky top-0 left-0">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Image src={MonibackLogo} alt="Moniback logo" />

        <div className="flex items-center gap-[76px]">
          <nav className="flex items-center gap-12 text-base">
            <Link href="">For Business</Link>
            <Link href="">Government</Link>
            <Link href="">Charity</Link>
            <Link href="">Why we give</Link>
            <Link href="">About us</Link>
          </nav>

          <Button className="w-[169px]">Get started</Button>
        </div>
      </div>
    </header>
  );
}
