"use client";
import Image from "next/image";
import { useGameBet, useGameSetting } from "@/hooks";
import { BetButton } from "./BetButton";
import { LearnBox } from "./LearnBox";
import { Timer } from "./Timer";
import { shortAddr } from "@/utils";
import { Box } from "./shared/Box";

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
          <Image
            src={"/logo.jpg"}
            alt=" NFT"
            width={150}
            height={150}
            className=" w-[170] h-[170] rounded-md border border-pink-primary self-start"
          />

          <div className="flex-grow flex flex-col gap-3">
            <Box className="w-full">
              <div className="text-xs">MAIN PRIZE:</div>
              <div className="text-blue-primary font-bold">2500 USDT</div>
            </Box>

            <div className="flex flex-col lg:flex-row h-full gap-3">
              <Box className="w-full">
                <div className="text-xs">CURRENT POOL:</div>
                <div className="text-blue-primary font-bold">
                  {bet?.prizePool} USDT
                </div>
              </Box>

              <Box className="w-full">
                <div className="text-xs">ENTRY TICKET:</div>
                <div className="text-blue-primary font-bold">
                  {bet?.nextBetAmount} USDT
                </div>
              </Box>
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
