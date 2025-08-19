"use client"
import { Button } from "./shared"
import { useBet } from "@/hooks/useBet"
import { usePlayerActions } from "@/hooks/usePlayerActions"
import { zeroAddress } from "viem"

interface BetButtonProps {
  gameAddr?: string
}

export const BetButton = ({ gameAddr }: BetButtonProps) => {
  const { bet } = useBet(gameAddr || '')
  const { add } = usePlayerActions()

  const handleBet = () => {
    add.mutate() // add the player/bettor to api
    bet.mutate({ nftId: 0, refAddr: zeroAddress }) // 
  }

  return (
    <>
      <Button 
        onClick={handleBet}
        disabled={false}
        loading={bet.isPending}
        className="bg-pink-primary w-full flex gap-2 place-content-center text-dark-primary font-bold text-xl cursor-pointer disabled:opacity-50">
        Munch It
      </Button>
    </>
  )
}