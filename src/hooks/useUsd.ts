"use client"

import { useMutation } from "@tanstack/react-query"
import { Address, parseAbi } from "abitype"
import { useGlobalWalletSignerAccount, useGlobalWalletSignerClient } from "@abstract-foundation/agw-react"
import abi from "@/abis/usd.abi.json"

export const useUsd = (usdAddr: string | Address) => {
  const { address } = useGlobalWalletSignerAccount()
  const { data: client } = useGlobalWalletSignerClient()

  const approve = useMutation({
    mutationKey: [`usd-approve`],
    mutationFn: async({ spender, amount }: any) => {

      console.log("BET AMOUNT", spender, amount)

      try {
        const txHash = await client?.writeContract({
          abi: parseAbi(abi),
          address: usdAddr as Address,
          functionName: "approve",
          args: [spender, amount]
        })

        console.log("TX HASH", txHash)

      } catch (e) {
        console.log("USD APPROVAL FAILED", e)

      }

    }
  })

  const transfer = useMutation({
    mutationKey: [`usd-transfer`],
    mutationFn: async({ spender, amount }: { spender: string, amount: number }) => {
      try {
        const txHash = await client?.writeContract({
          abi: abi,
          address: usdAddr as Address,
          functionName: "approve",
          args: [spender, amount]
        })

        console.log("TX HASH", txHash)

      } catch (e) {
        console.log("USD TRANSFER FAILED", e)

      }
    }
  })

  return {
    approve,
    transfer,
  }

}