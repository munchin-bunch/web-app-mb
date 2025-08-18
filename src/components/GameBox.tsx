"use client";
import { useGameBet, useGameSetting } from "@/hooks";
import { BetButton } from "./BetButton";
import { LearnBox } from "./LearnBox";
import { Timer } from "./Timer";
import { shortAddr } from "@/utils";

interface GameBoxProps {
  gameId?: string;
}

export const GameBox = ({ gameId: gameAddr }: GameBoxProps) => {
  const { data: bet } = useGameBet(gameAddr);

  return (
    <div className="border-1 border-pink-primary rounded-sm">
      <div className="flex justify-between bg-pink-primary py-2 px-4 text-black text-sm lg:text-base">
        <div>Game #{shortAddr(gameAddr, 4, 4)}</div>
        <div>RULES & REWARD</div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <div className="relative">
            <img
              className="max-w-[140px] border-1 border-pink-500"
              src="/nft-1.jpg"
            />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <div className="h-full border-1 border-pink-primary place-content-center p-2">
              <div className="text-xs">MAIN PRIZE:</div>
              <div className="text-blue-primary font-bold">2500 USDT</div>
            </div>
            <div className="flex h-full gap-3">
              <div className="border-1 border-pink-primary place-content-center w-full p-2">
                <div className="text-xs">CURRENT POOL:</div>
                <div className="text-blue-primary font-bold">
                  {bet?.prizePool} USDT
                </div>
              </div>
              <div className="border-1 border-pink-primary place-content-center w-full p-2">
                <div className="text-xs">ENTRY TICKET:</div>
                <div className="text-blue-primary font-bold">
                  {bet?.nextBetAmount} USDT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between p-4">
        <LearnBox label="LEARN BEFORE YOU MUNCH" />
        <Timer label="TIME REMAINING:" />
      </div>
      <div className="p-4">
        <BetButton gameAddr={gameAddr} />
      </div>
    </div>
  );
};
