import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { AbsAccount } from "./AbsAccount";

const APP_NAME = "Phat Puff";

export function TopBar() {
  return (
    <header className="w-full flex justify-between lg:items-end py-10 pb-26">
      <Link href={`/current-games`} className="">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-pink-primary tracking-wider uppercase">
          {APP_NAME}
        </h1>
      </Link>
      <AbsAccount>
        <ConnectWallet />
      </AbsAccount>
    </header>
  );
}
