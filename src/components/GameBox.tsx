"use client"
import { useGameBet } from "@/hooks/useGameBet"
import { BetButton } from "./BetButton"
import { LearnBox } from "./LearnBox"
import { Timer } from "./Timer"

interface GameBoxProps {
  gameId?: number | string,
}

export const GameBox = ({ gameId }: GameBoxProps) => {
  const gameAddr = "0xbc017649a57f29329c8d401ac3529edf29da2766"
  // const { data: setting } = useGameSetting("0xbc017649a57f29329c8d401ac3529edf29da2766")
  const { data: bet } = useGameBet(gameAddr)

  return (
    <div className="border-1 border-pink-primary rounded-sm">
      <div className="flex bg-pink-primary py-2 px-4 text-black">
        <div className="">
          Game #00{gameId}
        </div>
        <div className="flex-grow" />
        <div>RULES & REWARD DISTRIBUTION</div>
      </div>
      <div className="p-4">
        <div className="flex gap-3">
          <div className="relative">
            <img className="max-w-[140px] border-1 border-pink-500" src="/nft-1.jpg" />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <div className="h-full border-1 border-pink-primary place-content-center p-2">
              <div className="text-xs">MAIN PRIZE:</div>
              <div className="text-blue-primary font-bold">2500 USDT</div>
            </div>
            <div className="flex h-full gap-3">
              <div className="border-1 border-pink-primary place-content-center w-full p-2">
                <div className="text-xs">CURRENT POOL:</div>
                <div className="text-blue-primary font-bold">{bet?.prizePool} USDT</div>
              </div>
              <div className="border-1 border-pink-primary place-content-center w-full p-2">
                <div className="text-xs">ENTRY TICKET:</div>
                <div className="text-blue-primary font-bold">{bet?.betAmount} USDT</div>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4">
        <LearnBox label="LEARN BEFORE YOU MUNCH" />
        <Timer label="TIME REMAINING:" />
      </div>
      <div className="p-4">
        <BetButton gameAddr={gameAddr} />
      </div>
    </div>
  )
}

  // <div>TIME REMAINING: {bet?.nextBetAt}</div>
