"use client"
import { useUsd } from "@/hooks/useUsd"
import { Button } from "./shared"
import { usdAddr } from "@/constants/chain"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { useGame } from "@/hooks/useGame"
import { Spinner } from "./Spinner"
import { useGameBet } from "@/hooks/useGameBet"
import { useBet } from "@/hooks/useBet"
import { zeroAddress } from "viem"

interface BetButtonProps {
  gameAddr?: string
}

export const BetButton = ({ gameAddr }: BetButtonProps) => {
  const { bet } = useBet(gameAddr || '')

  const handleBet = () => bet.mutate({ nftId: 0, refAddr: zeroAddress })

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

// console.log("GAME BET BUTTON", gameAddr)
// const { address } = useGlobalWalletSignerAccount()
// const game = useGame(gameAddr)
// const actions = useGameBet(gameAddr)
// const usd = useUsd(usdAddr)

// const { data: betAmount = "0" } = useBetAmount(gameAddr)
// const { data: balance = "0" } = useUsdBalance(usdAddr, address)
// const { data: allowance = "0" } = useUsdAllowance(usdAddr, address, gameAddr)
// // console.log("BALANCE", balance, allowance, betAmount)
// const handleBet = useMutation({
//   mutationKey: [`user-bet`],
//   mutationFn: async() => {
//     // const _betAmount = betAmount || 0
//     // const _allowance = allowance || 0
//     // const _balance = balance || 0
//     if (betAmount > allowance && balance > betAmount) {
//       await usd.approve.mutateAsync({ spender: gameAddr, amount: betAmount })
//     }
//     await game.bet.mutateAsync({ nftId: 0, amount: betAmount, refAddr: zeroAddress })
//   }
// })