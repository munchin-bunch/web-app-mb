"use client"

import { useQuery } from "@tanstack/react-query"
// store.get(`@bettors-${gameAddr}`, [])

export const useBettors = (gameAddr?: string) => {
  // const [bettors, setBettors] = useState([])

  return useQuery({
    queryKey: [`bettors`, gameAddr],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryFn: async() => {
      // get the last bettor id
      // get the bettor list
    }
  })

}