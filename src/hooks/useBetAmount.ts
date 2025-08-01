"use client"
import { rpcClient } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, parseAbi } from "viem"
import abi from "@/abis/game.abi.json"

export const useBetAmount = (gameAddr?: string) => {
  return useQuery({
    enabled: !!gameAddr,
    queryKey: [`bet-amount`],
    queryFn: async() => {
      return await rpcClient.readContract({
        abi: parseAbi(abi),
        address: gameAddr as Address,
        functionName: "getBetAmount",
      }) as string
    }
  })
}

// try {

//   retr

//   const contractConfig = {
//     address: address as Address,
//     abi: parseAbi(abi)
//   }

//   const [betAmount, prizePool, nextBetAt] = await Promise.all([
//     client.readContract({
//       ...contractConfig,
//       functionName: 'getBetAmount',
//     }),
//     client.readContract({
//       ...contractConfig,
//       functionName: 'prizePool',
//     }),
//     client.readContract({
//       ...contractConfig,
//       functionName: 'nextBetAt',
//     })          
//   ])

//   return {
//     betAmount: fromUsdt(betAmount as bigint),
//     prizePool: fromUsdt(prizePool as bigint),
//     nextBetAt: nextBetAt
//   } as GameBet

// } catch(e) {
//   console.log(e)
//   return {} as GameBet
// }