"use client"
import { chain } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, createPublicClient, http, parseAbi } from "viem"
import abi from "@/abis/MunchinGameMini.json"
import { GameBet } from "@/types/GameSetting"
import { fromUsdt } from "@/utils/number"

export const useGameBet = (address?: string) => {
  const client = createPublicClient({ chain, transport: http("") })

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: [`game-bet`],
    queryFn: async() => {
      try {

        const contractConfig = {
          address: address as Address,
          abi: parseAbi(abi)
        }

        const [betAmount, prizePool] = await Promise.all([
          client.readContract({
            ...contractConfig,
            functionName: 'getBetAmount',
          }),
          client.readContract({
            ...contractConfig,
            functionName: 'prizePool',
          })        
        ])

        return {
          betAmount: fromUsdt(betAmount as bigint),
          prizePool: fromUsdt(prizePool as bigint)
        } as GameBet

      } catch(e) {
        console.log(e)
        return {} as GameBet
      }
    }
  })

}