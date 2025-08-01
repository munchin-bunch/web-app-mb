"use client"

import { useQuery } from "@tanstack/react-query"
import abi from "@/abis/factory.abi.json"
import { rpcClient } from "@/constants/chain"
import { Address, parseAbi } from "abitype"
import { useLastGameId } from "./useLastGameId"

console.log("ARRRRAYY", [...Array(5)])

export const useGamesByIds = (factoryAddr?: string) => {
  const { data } = useLastGameId(factoryAddr)
  const lastGameId = parseInt(data || '')

  return useQuery({
    queryKey: [`games-by-ids`, lastGameId],
    enabled: !!factoryAddr,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryFn: async() => {

      try {

        if (lastGameId == 0) return []

        const contractConfig = {
          abi: parseAbi(abi),
          address: factoryAddr as Address,
          functionName: "getGameById",
        }

        const reqs = [...Array(lastGameId - 1)].map((x, index) => rpcClient.readContract({
          ...contractConfig,
          args: [index + 1]
        }))

        return await Promise.all(reqs)

      } catch(e) {
        console.log("GAME IDS FAILED", e)
        return []
      }

    }
  })
}
