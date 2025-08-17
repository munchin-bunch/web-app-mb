"use client";

import { Button } from "./shared";
import { useLoginWithAbstract } from "@abstract-foundation/agw-react";

const CONNECT_WALLET = " Connect Wallet";

export const ConnectWallet = () => {
  const { login } = useLoginWithAbstract();

  return (
    <Button
      onClick={login}
      className="px-2 lg:px-6 py-2 text-[10px]  lg:text-base bg-blue-primary font-bold text-dark-primary hover:bg-blue-300 hover:text-white uppercase  tracking-wider"
    >
      {CONNECT_WALLET}
    </Button>
  );
};
