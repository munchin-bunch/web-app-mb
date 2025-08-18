"use client"
import { chain } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, createPublicClient, http, parseAbi } from "viem"
import { GameBet } from "@/types/GameSetting"
import { fromUsdt } from "@/utils/number"
import abi from "@/abis/game.abi.json"

export const useGameBet = (address?: string) => {
  const client = createPublicClient({ chain, transport: http() })

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: [`game-bet`, address],
    queryFn: async() => {
      try {

        const contractConfig = {
          address: address as Address,
          abi: parseAbi(abi)
        }

        const [betAmount, prizePool, nextBetAt] = await Promise.all([
          client.readContract({
            ...contractConfig,
            functionName: 'getBetAmount',
          }),
          client.readContract({
            ...contractConfig,
            functionName: 'prizePool',
          }),
          client.readContract({
            ...contractConfig,
            functionName: 'nextBetAt',
          })          
        ])

        return {
          betAmount: fromUsdt(betAmount as bigint),
          prizePool: fromUsdt(prizePool as bigint),
          nextBetAt: nextBetAt
        } as GameBet

      } catch(e) {
        console.log(e)
        return {} as GameBet
      }
    }
  })

}