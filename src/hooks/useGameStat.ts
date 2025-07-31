"use client"
import { chain } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, createPublicClient, http, parseAbi } from "viem"
import abi from "@/abis/MunchinGameMini.json"

export const useGameStat = (address?: string) => {
  const client = createPublicClient({ chain, transport: http("") })

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: [`game-stat`, address],
    queryFn: async() => {
      try {

        const contractConfig = {
          address: address as Address,
          abi: parseAbi(abi)
        }

      } catch(e) {

      }
    }
  })

}