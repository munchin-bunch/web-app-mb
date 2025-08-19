"use client"
import { supa } from "@/utils/supa"
import { useQuery } from "@tanstack/react-query"
import { getAddress } from "viem"

export const useGame = (gameAddr: string) => {
  return useQuery({
    enabled: !!gameAddr,
    queryKey: [`game`, gameAddr],
    queryFn: async() => {
      return await supa
        .from('games')
        .select()
        .eq('address', getAddress(gameAddr))
        .maybeSingle()
    }
  })
}