"use client"
import { supa } from "@/utils/supa"
import { useQuery } from "@tanstack/react-query"

export const useGames = () => {
  return useQuery({
    queryKey: [`games`],
    queryFn: async() => {
      return (await supa
        .from('games')
        .select()
        .order('created_at', { ascending: true })).data || []
    }
  })
}