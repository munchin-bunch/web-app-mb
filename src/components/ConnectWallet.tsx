"use client";

import { BlueActionButton } from "./shared";
import { useLoginWithAbstract } from "@abstract-foundation/agw-react";

const CONNECT_WALLET = " Connect Wallet";

export const ConnectWallet = () => {
  const { login } = useLoginWithAbstract();

  return (
    <BlueActionButton buttonActionLabel={CONNECT_WALLET} onClick={login} />
  );
};
