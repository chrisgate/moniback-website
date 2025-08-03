"use client";

import { createContext, ReactNode, use, useState } from "react";

type MobileNavContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MobileNavContext = createContext({} as MobileNavContextType);

export default function MobileNavProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value: MobileNavContextType = {
    isOpen,
    setIsOpen,
  };
  return <MobileNavContext value={value}>{children}</MobileNavContext>;
}

export function useMobileNav() {
  const context = use(MobileNavContext);

  if (context === undefined) {
    throw new Error("useMobileNav should be used within a MobileNavProvider");
  }

  return context;
}
