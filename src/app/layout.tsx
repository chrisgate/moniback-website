import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MobileNavProvider from "@/components/mobile-nav/mobile-nav-provider";
import MobileNav from "@/components/mobile-nav/mobile-nav";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Moniback",
    default: "Moniback",
  },
  description: "Big Savings on the Brands you Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} bg-Gray-50 text-Gray-800 text-sm antialiased`}
      >
        <MobileNavProvider>
          <MobileNav />
          <Header />
          {children}
          <Footer />
        </MobileNavProvider>
      </body>
    </html>
  );
}
