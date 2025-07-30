"use client"

import { useAbstractClient } from "@abstract-foundation/agw-react"
import { useMutation } from "@tanstack/react-query"
import { parseAbi } from "viem"
import abi from "@/abis/MunchinGameMini.json"

export const useGame = () => {

  const { data: client } = useAbstractClient()

  const bet = useMutation({
    mutationKey: [`deploy`],
    mutationFn: async() => {
      if (!client) return

      const txHash = await client.writeContract({
        abi: parseAbi(abi),
        address: "0xbc017649a57f29329c8d401ac3529edf29da2766",
        functionName: "bet",
        args: [],
      })

      return txHash

    }
  })

  return {
    bet
  }
}