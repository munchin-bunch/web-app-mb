"use client"
import { useQuery } from "@tanstack/react-query"

export const useGame = (gameAddr?: string) => {
  return useQuery({
    queryKey: [`game`, gameAddr],
    queryFn: async() => {

    }
  })
}