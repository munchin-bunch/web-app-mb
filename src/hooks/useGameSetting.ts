"use client"
import { chain } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, createPublicClient, http, parseAbi } from "viem"
import abi from "@/abis/MunchinGameMini.json"
import { GameSetting } from "@/types/GameSetting"

export const useGameSetting = (address?: string) => {
  const client = createPublicClient({ chain, transport: http("") })

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: [`game-setting`],
    queryFn: async() => {
      try {

        const contractConfig = {
          address: address as Address,
          abi: parseAbi(abi)
        }

        return await client.readContract({
          ...contractConfig,
          functionName: "getSetting",
        }) as GameSetting

      } catch(e) {
        console.log(e)
        return {} as GameSetting
      }
    }
  })

}