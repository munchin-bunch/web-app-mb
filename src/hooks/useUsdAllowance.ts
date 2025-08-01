"use client"
import { rpcClient } from "@/constants/chain"
import { useQuery } from "@tanstack/react-query"
import { Address, parseAbi } from "abitype"
import abi from "@/abis/usd.abi.json"

export const useUsdAllowance = (usdAddr?: string, account?: string, spender?: string) => {
  return useQuery({
    enabled: !!(account && spender),
    queryKey: [`usd-allowance`, usdAddr, account, spender],
    queryFn: async() => {
      return await rpcClient.readContract({
        abi: parseAbi(abi),
        address: usdAddr as Address,
        functionName: "allowance",
        args: [account, spender]
      }) as string
    }
  })
}