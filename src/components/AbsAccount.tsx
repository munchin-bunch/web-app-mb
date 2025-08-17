"use client";
import {
  useGlobalWalletSignerAccount,
  useLoginWithAbstract,
} from "@abstract-foundation/agw-react";
import { shortAddr } from "@/utils/shortAddr";
import { ReactElement, useState } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useToast } from "@/hooks/useToast";

export const AbsAccount = ({ children }: { children: ReactElement }) => {
  const { address, status } = useGlobalWalletSignerAccount();
  const { logout } = useLoginWithAbstract();
  const { addToast } = useToast();

  function disconnectWallet() {
    logout();
    addToast({
      title: "Wallet disconnected",
      description: "You have successfully disconnected your wallet.",
      duration: 5000,
    });
  }

  if (status === "disconnected") return children;
  if (status === "connecting" || status === "reconnecting") {
    return <div>Connecting</div>;
  }

  return (
    <article className=" flex gap-3 items-end ">
      <div className="text-xs lg:text-base bold font-bold text-pink-primary tracking-wider items-end">
        {shortAddr(address)}
      </div>

      <span className="group ">
        <div
          onClick={disconnectWallet}
          className="box-shadow-base  p-2 lg:mb-1.5 rounded-lg cursor-pointer group-hover:bg-gray-100"
        >
          <VscDebugDisconnect className="group-hover:text-pink-primary size-4 lg:size-5" />
        </div>
      </span>
    </article>
  );
};
