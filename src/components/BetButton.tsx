"use client"
import { useUsd } from "@/hooks/useUsd"
import { Button } from "./shared"
import { Address } from "abitype"
import { usdAddr } from "@/constants/chain"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { useMutation } from "@tanstack/react-query"
import { useGame } from "@/hooks/useGame"
import { useUsdBalance } from "@/hooks/useUsdBalance"
import { useUsdAllowance } from "@/hooks/useUsdAllowance"
import { useBetAmount } from "@/hooks/useBetAmount"
import { zeroAddress } from "viem"
import { useNextBetAt } from "@/hooks/useNextBetAt"
import { Spinner } from "./Spinner"

interface BetButtonProps {
  gameAddr?: string | Address
}

export const BetButton = ({ gameAddr }: BetButtonProps) => {
  const { address } = useGlobalWalletSignerAccount()
  const game = useGame(gameAddr)
  const usd = useUsd(usdAddr)
  const { data: betAmount = 0 } = useBetAmount(gameAddr)
  const { data: nextBetAt = 0 } = useNextBetAt(gameAddr)
  const { data: balance = 0 } = useUsdBalance(usdAddr, address)
  const { data: allowance = 0 } = useUsdAllowance(usdAddr, address, gameAddr)

  // console.log("BALANCE", balance, allowance, betAmount)

  const handleBet = useMutation({
    mutationKey: [`user-bet`],
    mutationFn: async() => {
      const _betAmount = betAmount || 0
      const _allowance = allowance || 0
      const _balance = balance || 0
      if (_betAmount > _allowance && _balance > _betAmount) {
        await usd.approve.mutateAsync({ spender: gameAddr, amount: betAmount })
      }
      await game.bet.mutateAsync({ nftId: 0, amount: betAmount, refAddr: zeroAddress })
    }
  })

  return (
    <>
      <Button 
        onClick={() => handleBet.mutate()}
        disabled={handleBet.isPending}
        className="bg-pink-primary w-full flex gap-2 place-content-center text-dark-primary font-bold text-xl cursor-pointer disabled:opacity-50">
        <Spinner />
        Munch It
      </Button>
    </>
  )
}