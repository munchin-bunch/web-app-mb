"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { GameApi } from "@/types";
import { shortAddr } from "@/utils";
import { Countdown } from "./Countdown";
import { BlueActionButton } from "./shared";
import { fromUsdt } from "@/utils/number";

//TODO: add game type
interface Props {
  game: GameApi;
  gameIndex: number;
  buttonActionLabel?: string;
}

const Label = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span
      className={`font-light tracking-wider text-white uppercase text-sm ${className}`}>
      {text}
    </span>
  );
};

const LabelValue = ({ text }: { text: string }) => {
  return (
    <span className="font-extrabold text-xl text-blue-primary uppercase">
      {text}
    </span>
  );
};

const GameDetailColumn = ({ children }: { children: ReactNode }) => {
  return <span className="flex flex-col">{children}</span>;
};

export const GameCardCompleted = ({
  game,
  gameIndex,
  buttonActionLabel = "Check",
}: Props) => {

  const mainPrize = fromUsdt(BigInt(game.setting?.initPrize))

  return (
    <article className="bg-dark-primary border-2 border-pink-primary rounded-lg overflow-hidden mb-6">

      <div className="flex justify-between items-center px-4 py-4 bg-pink-primary text-xs font-bold text-dark-primary tracking-widest uppercase">
        <span>Game #{gameIndex}</span>
        <span>#{shortAddr(game.address, 4, 4)}</span>
      </div>

      <div className="flex gap-4 p-4 items-center md:items-start">
        <Image
          src={game.image ?? "/logo.jpg"}
          alt="Panda NFT"
          width={120}
          height={120}
          className="rounded-md box-shadow-base self-start"
        />

        <div className="flex-1 flex flex-col text-sm md:text-base gap-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <Label text={"Main Prize:"} className="mr-2" />
            <LabelValue text={`${mainPrize ?? 0} USDT`} />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0 lg:justify-between">
            <span className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <GameDetailColumn>
                <Label text={"Entry Ticket"} />
                <LabelValue text={"100 USDT"} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Current Pool"} />
                <LabelValue text={`${game.prize_pool ?? 0} USDT`} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Time Remaining"} />
                <Countdown className="text-xl font-extrabold text-blue-primary" timestamp={game.setting.endTime} />
              </GameDetailColumn>
            </span>

            <Link href={`/game/${game.address}`}>
              <BlueActionButton buttonActionLabel={buttonActionLabel} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
