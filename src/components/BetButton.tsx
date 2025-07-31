"use client"
import { useUsd } from "@/hooks/useUsd"
import { Button } from "./shared"
import { useGameBet } from "@/hooks/useGameBet"
import { Address } from "abitype"
import { usdAddr } from "@/constants/chain"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { useMutation } from "@tanstack/react-query"
import { useGame } from "@/hooks/useGame"
import { useUsdBalance } from "@/hooks/useUsdBalance"
import { useUsdAllowance } from "@/hooks/useUsdAllowance"
import { useBetAmount } from "@/hooks/useBetAmount"
import { zeroAddress } from "viem"

interface BetButtonProps {
  gameAddr?: string | Address
}

export const BetButton = ({ gameAddr }: BetButtonProps) => {
  const { address } = useGlobalWalletSignerAccount()
  const { data: betAmount = 0 } = useBetAmount(gameAddr)
  const { data: balance = 0 } = useUsdBalance(usdAddr, address)
  const { data: allowance = 0 } = useUsdAllowance(usdAddr, address, gameAddr)

  const game = useGame(gameAddr)
  console.log("BALANCE", balance, allowance, betAmount)

  // const { data: bet } = useGameBet(gameAddr)
  const usd = useUsd(usdAddr)

  const handleBet = useMutation({
    mutationKey: [`user-bet`],
    mutationFn: async() => {

      // let _betAmount = betAmount || 0
      // let _spender = gameAddr as Address

      if (betAmount > allowance) {
        await usd.approve.mutateAsync({ spender: gameAddr, amount: betAmount })
      }
      
      await game.bet.mutateAsync({ nftId: 0, amount: betAmount, refAddr: zeroAddress })
    }
  })


  return (
    <>
      <div>{address}</div>
      <Button 
        onClick={() => handleBet.mutate()}
        className="bg-pink-primary w-full text-black font-bold text-xl cursor-pointer">
        Munch It
      </Button>
    </>
  )
}