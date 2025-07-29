import Link from "next/link";
import { Button } from "./shared";

const CONNECT_WALLET = " Connect Wallet";
const APP_NAME = "Phat Puff";
export function TopBar() {
  return (
    <header className="w-full flex justify-between items-center py-10 pb-26">
      <Link href={`/current-games`}>
        <h1 className="text-5xl font-extrabold text-pink-primary tracking-wider uppercase">
          {APP_NAME}
        </h1>
      </Link>

      <Button className="px-6 py-2 bg-blue-primary font-bold text-dark-primary hover:bg-blue-300 hover:text-white uppercase  tracking-wider">
        {CONNECT_WALLET}
      </Button>
    </header>
  );
}
