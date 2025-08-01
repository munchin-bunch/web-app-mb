"use client"
import { useQuery } from "@tanstack/react-query"
import abi from "@/abis/usd.abi.json"
import { Address, parseAbi } from "viem"
import { rpcClient } from "@/constants/chain"

export const useUsdBalance = (usdAddr?: string, account?: string) => {
  return useQuery({
    enabled: !!(usdAddr && account),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: [`usd-allowance`, usdAddr, account],
    queryFn: async() => {
      return await rpcClient.readContract({
        abi: parseAbi(abi),
        address: usdAddr as Address,
        functionName: "balanceOf",
        args: [account]
      }) as string
    }
  })
}