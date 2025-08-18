"use client";
import {
  useGlobalWalletSignerAccount,
  useLoginWithAbstract,
} from "@abstract-foundation/agw-react";
import { shortAddr } from "@/utils/shortAddr";
import { ReactElement } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useToast } from "@/hooks/useToast";
import { useExplorer } from "@/hooks/useCurrentChain";

export const AbsAccount = ({ children }: { children: ReactElement }) => {
  const { address, status } = useGlobalWalletSignerAccount();
  const { logout } = useLoginWithAbstract();
  const { addToast } = useToast();
  const { toAddr } = useExplorer()

  // console.log("CLIENT", client.data)

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
    <article className="flex gap-3 items-end">
      <div className="text-xs lg:text-base bold font-bold text-pink-primary tracking-wider items-end">
        <a href={toAddr(address)} target="_blank">
        {shortAddr(address)}
        </a>
      </div>

      <span className="group">
        <div
          onClick={disconnectWallet}
          className="box-shadow-base  p-2 lg:mb-1.5 rounded-lg cursor-pointer group-hover:bg-white group-active:bg-white group-focus:bg-white">
          <VscDebugDisconnect className="group-hover:text-pink-primary group-active:text-pink-primary group-focus:text-pink-primary size-4 lg:size-5" />
        </div>
      </span>
    </article>
  );
};
