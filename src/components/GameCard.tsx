"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { GameApi, GameDataModel } from "@/types";
import { Button } from "./shared";

//TODO: add game type
interface Props {
  game: GameApi;
  gameIndex: number;
  buttonActionLabel?: string;
}

const Label = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span
      className={`font-light tracking-wider text-white uppercase text-sm ${className}`}
    >
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

export function GameCard({
  game,
  gameIndex,
  buttonActionLabel = "Check",
}: Props) {
  return (
    <article className="bg-dark-primary border-2 border-pink-primary rounded-lg overflow-hidden mb-6">
      <div className="flex justify-between items-center px-4 py-4 bg-pink-primary text-xs font-bold text-dark-primary tracking-widest uppercase">
        <span>Game #{gameIndex}</span>
        <span>#{game.id}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 items-center md:items-start">
        <Image
          src={game.image ?? "/nft-1.jpg"}
          alt="Panda NFT"
          width={120}
          height={120}
          className="rounded-md box-shadow-base"
        />

        <div className="flex-1 flex flex-col text-sm md:text-base gap-5">
          <div className="flex items-center">
            <Label text={"Main Prize:"} className="mr-2" />
            <LabelValue text={`${game.prize.winner}`} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center justify-between gap-6">
              <GameDetailColumn>
                <Label text={"Entry Ticket"} />
                <LabelValue text={"000 USDT"} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Current Pool"} />
                <LabelValue text={`${game.prize_pool} USDT`} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Time Remaining"} />
                <LabelValue text={"00000"} />
              </GameDetailColumn>
            </span>

            <Link href={`/game/${game.address}`}>
              <Button
                className={clsx(
                  "bg-blue-primary px-4 text-dark-primary font-bold hover:bg-blue-300 hover:text-white uppercase",
                  "text-xs",
                  "lg:text-base lg:px-8"
                )}
              >
                {buttonActionLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
