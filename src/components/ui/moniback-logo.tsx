import Image from "next/image";
import logo from "/public/svgs/moniback-logo.svg";

export default function MonibackLogo({ className }: { className?: string }) {
  return <Image src={logo} alt="Moniback logo" className={className} />;
}
