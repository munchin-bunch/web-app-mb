"use client"
import { rpcClient } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, parseAbi } from "viem"
import abi from "@/abis/game.abi.json"

export const useNextBetAt = (gameAddr?: string) => {
  return useQuery({
    enabled: !!gameAddr,
    queryKey: [`next-bet-at`],
    queryFn: async() => {
      return await rpcClient.readContract({
        abi: parseAbi(abi),
        address: gameAddr as Address,
        functionName: "nextBetAt",
      }) as string
    }
  })
}