"use client"
import { useQuery } from "@tanstack/react-query"
import { Address, parseAbi, zeroAddress } from "viem"
import { useClient } from "./useCurrentChain"
import { readContract } from "viem/actions"
import { fromUsdt } from "@/utils/number"
import { FN_GET_CONFIG, FN_GET_POSITIONS, FN_GET_PRIZE, FN_GET_SETTING } from "@/constants/game"

export const useGamePositions = (gameAddr: string) => {
  const { client } = useClient()  
  
  return useQuery({
    enabled: !!client,
    queryKey: [`game-positions`, gameAddr],
    queryFn: async() => {
      if (!client) return false

      const contract = {
        address: gameAddr as Address,
        abi: parseAbi([FN_GET_POSITIONS, FN_GET_CONFIG, FN_GET_PRIZE, FN_GET_SETTING])
      }

      const [positions, prize, config, setting] = await Promise.all([
        readContract(client, { ...contract, functionName: "getPositions" }),
        readContract(client, { ...contract, functionName: "getPrize" }),
        readContract(client, { ...contract, functionName: "getConfig" }),
        readContract(client, { ...contract, functionName: "getSetting" })                
      ])    

      const winner = parseFloat(setting.initPrize + fromUsdt(prize.winner))
      const nexts = parseFloat(setting.initPrize + fromUsdt(prize.nexts))
      console.log("PRIZE", prize, winner, nexts)

      return positions.filter((address: string) => address != zeroAddress).map((address: any, idx: number) => {
        return { 
          address,
          prize: idx == 0 ? winner : (nexts / 9),
          roi: idx == 0 ? 1000 : 100
        }
      })

    }
  })
}