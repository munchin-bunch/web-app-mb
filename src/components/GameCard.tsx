"use client"

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./shared";
import { GameDataModel } from "@/types";

//TODO: add game type
interface Props {
  game: GameDataModel;
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

export function GameCard({ game, buttonActionLabel = "Check" }: Props) {
  return (
    <article className="bg-dark-primary border-2 border-pink-primary rounded-lg overflow-hidden mb-6">
      <div className="flex justify-between items-center px-4 py-4 bg-pink-primary text-xs font-bold text-dark-primary tracking-widest uppercase">
        <span>Game #{game.number}</span>
        <span>#{game.id}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 items-center md:items-start">
        <Image
          src={game.image}
          alt="Panda NFT"
          width={120}
          height={120}
          className="rounded-md"
        />

        <div className="flex-1 flex flex-col text-sm md:text-base gap-5">
          <div className="flex items-center">
            <Label text={"Main Prize:"} className="mr-2" />
            <LabelValue text={game.prize} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center justify-between gap-6">
              <GameDetailColumn>
                <Label text={"Entry Ticket"} />
                <LabelValue text={game.entry} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Current Pool"} />
                <LabelValue text={game.pool} />
              </GameDetailColumn>

              <GameDetailColumn>
                <Label text={"Time Remaining"} />
                <LabelValue text={game.remaining} />
              </GameDetailColumn>
            </span>

            <Link href={`/game/${game.id}`}>
              <Button className="bg-blue-primary px-8 text-dark-primary font-bold hover:bg-blue-300 hover:text-white uppercase">
                {buttonActionLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
