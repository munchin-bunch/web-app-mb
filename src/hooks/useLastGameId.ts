"use client"

import { useQuery } from "@tanstack/react-query"
import abi from "@/abis/factory.abi.json"
import { rpcClient } from "@/constants/chain"
import { Address, parseAbi } from "abitype"

export const useLastGameId = (factoryAddr?: string) => {
  return useQuery({
    queryKey: [`last-game-id`],
    enabled: !!factoryAddr,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryFn: async() => {
      return await rpcClient.readContract({
        abi: parseAbi(abi),
        address: factoryAddr as Address,
        functionName: "lastGameId",
      }) as string
    }
  })
}
