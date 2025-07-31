"use client"
import { useQuery } from "@tanstack/react-query"

export const useGameStat = (address?: string) => {

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: [`game-stat`, address],
    queryFn: async() => {

    }
  })

}