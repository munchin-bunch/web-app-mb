"use client";

import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { abstractTestnet } from "viem/chains";

export default function AbsWalletWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AbstractWalletProvider chain={abstractTestnet}>
      {children}
    </AbstractWalletProvider>
  );
}