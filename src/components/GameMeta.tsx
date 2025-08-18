"use client";
import { useGameBet } from "@/hooks/useGameBet";
import { Countdown } from "./Countdown";
import { Box } from "./shared/Box";
import { TbInfoCircleFilled } from "react-icons/tb";
import { BetButton } from "./BetButton";

interface GameMetaProps {
  gameId?: string;
}

// const gameAddr = "0xbc017649a57f29329c8d401ac3529edf29da2766"

export const GameMeta = ({ gameId: gameAddr }: GameMetaProps) => {
  const { data } = useGameBet(gameAddr);

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex justify-between">
        <div>GAME ID</div>
        <div>RULES AND REWARDS DISTRIBUTION</div>
      </div>
      <div>
        <Box className="flex gap-3 items-center">
          <div>MAIN PRIZE:</div>
          <div className="font-bold text-xl text-blue-primary">
            2500 USDT & PUDGY PENGUIN NFT
          </div>
        </Box>
      </div>
      <div className="grid md:grid-cols-1 gap-4 lg:grid-cols-3">
        <Box>
          <div>CURRENT POOL</div>
          <div className="text-2xl font-bold text-blue-primary">
            {data?.prizePool}
          </div>
        </Box>
        <Box>
          <div>ENTRY TICKET</div>
          <div className="text-2xl font-bold text-blue-primary">
            {data?.nextBetAmount}
          </div>
        </Box>
        <Box>
          <div>TIME REMAINING</div>
          <Countdown className="text-2xl font-bold text-blue-primary" />
        </Box>
      </div>
      <div className="flex place-content-center items-center gap-2">
        <TbInfoCircleFilled />
        LEARN BEFORE YOU MUNCH
      </div>
      <div>
        <BetButton />
      </div>
    </div>
  );
};
