"use client"
import { useQuery } from "@tanstack/react-query"
import { readContract } from "viem/actions"
import { useClient } from "./useCurrentChain"
import { Address, parseAbi } from "viem"
import { FN_GET_BET_AMOUNT, FN_GET_CONFIG, FN_GET_PRIZE, FN_GET_SETTING } from "@/constants/game"

type GameConfigType = {
  config: any,
  setting: any,
  prize: any,
  betAmount: any
}

export const useGameConfig = (gameAddr: string) => {
  const { client } = useClient()

  return useQuery({
    enabled: !!(gameAddr && client),
    queryKey: [`game-config`, gameAddr],
    queryFn: async() => {
      if (!client) return

      const contract = {
        address: gameAddr as Address,
        abi: parseAbi([FN_GET_CONFIG, FN_GET_SETTING, FN_GET_PRIZE, FN_GET_BET_AMOUNT])
      }

      const [config, setting, prize, betAmount] = await Promise.all([
        readContract(client, { ...contract, functionName: "getConfig" }),
        readContract(client, { ...contract, functionName: "getSetting" }),       
        readContract(client, { ...contract, functionName: "getPrize" }),
        readContract(client, { ...contract, functionName: "getBetAmount" }),
      ])

      return {
        config,
        setting,
        prize,
        betAmount,
      } as GameConfigType

    }
  })
}