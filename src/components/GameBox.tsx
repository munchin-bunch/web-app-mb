"use client"
import { shortAddr } from "@/utils/shortAddr"
import { BetButton } from "./BetButton"
import { LearnBox } from "./LearnBox"
import { Timer } from "./Timer"
import { useGameConfig } from "@/hooks/useGameConfig"
import { fromUsdt } from "@/utils/number"
import { useExplorer } from "@/hooks/useCurrentChain"

interface GameBoxProps {
  gameAddr?: string,
}

export const GameBox = ({ gameAddr }: GameBoxProps) => {
  const { toAddr } = useExplorer()
  const query = useGameConfig(gameAddr || '')
  const setting = query.data?.setting
  const config = query.data?.config
  const prize = query.data?.prize
  const betAmount = query.data?.betAmount
  // console.log("CONFIG", query.data)

  return (
    <div className="border-1 border-pink-primary rounded-sm">

      <div className="flex bg-pink-primary py-2 px-4 text-black">
        <a href={toAddr(gameAddr || '')} target="_blank">
          <div className="font-bold">
            GAME #{shortAddr(gameAddr)}
          </div>
        </a>
        <div className="flex-grow" />
        <div className="text-right font-bold">RULES & REWARD DISTRIBUTION</div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="relative">
            <img className="max-w-[200px] justify-self-center-safe md:max-w-[140px] border-1 border-pink-500" src="/nft-1.jpg" />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <div className="w-full">
              <div className="text-xs">MAIN PRIZE:</div>
              <div className="text-blue-primary font-bold">{fromUsdt(setting?.initPrize || 0)} USDT</div>
            </div>
            <div className="flex h-full gap-3">
              <div className="border-1 border-pink-primary place-content-center w-full p-2 px-3">
                <div className="text-xs">CURRENT POOL:</div>
                <div className="text-blue-primary font-bold">{fromUsdt(prize?.prizePool || 0)} USDT</div>
              </div>
              <div className="border-1 border-pink-primary place-content-center w-full p-2 px-3">
                <div className="text-xs">ENTRY TICKET:</div>
                <div className="text-blue-primary font-bold">{fromUsdt(betAmount || 0)} USDT</div>
              </div>              
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 flex-col md:flex-row">
        <LearnBox label="LEARN BEFORE YOU MUNCH" />
        <Timer label="TIME REMAINING:" timestamp={Number(setting?.endTime || '0')} />
      </div>

      <div className="p-4">
        <BetButton gameAddr={gameAddr} />
      </div>
    </div>
  )
}