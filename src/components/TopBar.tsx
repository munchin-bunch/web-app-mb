import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { AbsAccount } from "./AbsAccount";

// const CONNECT_WALLET = " Connect Wallet";
const APP_NAME = "Phat Puff";

export function TopBar() {
  return (
    <header className="w-full flex justify-between items-center py-10 pb-26">
      <Link href={`/current-games`}>
        <h1 className="text-5xl font-extrabold text-pink-primary tracking-wider uppercase">
          {APP_NAME}
        </h1>
      </Link>
      <AbsAccount>
        <ConnectWallet />
      </AbsAccount>
    </header>
  );
}
