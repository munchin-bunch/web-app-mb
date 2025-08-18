import { useQuery } from "@tanstack/react-query"
import { Address, parseAbi } from "viem"
import { useClient } from "./useCurrentChain"
import { fromUsdt } from "@/utils/number"
import { FN_GET_EARNERS } from "@/constants/game"

export const useGameEarners = (gameAddr: string) => {
  const { client } = useClient()

  return useQuery({
    enabled: !!(gameAddr && client),
    queryKey: [`game-earners`, gameAddr],
    queryFn: async() => {
      if (!client) return

      const [earners, spents, prizes, rois] = await client.readContract({ 
        abi: parseAbi([FN_GET_EARNERS]),
        functionName: "getEarners",
        address: gameAddr as Address,
      }) 

      return earners.map((address: string, idx: number) => ({ 
        rank: idx + 1, 
        address, 
        roi: Number(rois[idx]) / 100, 
        spent: fromUsdt(spents[idx]), 
        prize: parseFloat(fromUsdt(prizes[idx])).toFixed(2)
      }))

    }
  })

}