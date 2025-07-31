"use client"

import { useAbstractClient, useGlobalWalletSignerClient } from "@abstract-foundation/agw-react"
import { useMutation } from "@tanstack/react-query"
import { Address, parseAbi } from "viem"
import abi from "@/abis/MunchinGameMini.json"

export const useGame = (gameAddr?: string) => {

  const { data: client } = useGlobalWalletSignerClient()

  const bet = useMutation({
    mutationKey: [`bet`],
    mutationFn: async({ nftId, amount, refAddr }: any) => {
      if (!client) return

      try {
        const txHash = await client.writeContract({
          abi: parseAbi(abi),
          address: gameAddr as Address,
          functionName: "bet",
          args: [nftId, amount, refAddr],
        })

        return txHash

      } catch(e) {
        console.log("BET FAILED", e)
      }

    }
  })

  return {
    bet
  }
}