"use client"
import { supa } from "@/utils/supa"
import { useQuery } from "@tanstack/react-query"

export const useGames = () => {
  return useQuery({
    queryKey: [`active-games`],
    queryFn: async() => {
      return (await supa
        .from('games')
        .select()
        .eq('completed', false)
        .order('created_at', { ascending: true })).data || []
    }
  })
}

export const usePrevGames = () => {
  return useQuery({
    queryKey: [`prev-games`],
    queryFn: async() => {
      return (await supa
        .from('games')
        .select()
        .eq('completed', true)
        .order('created_at', { ascending: true })).data || []
    }
  })
}

