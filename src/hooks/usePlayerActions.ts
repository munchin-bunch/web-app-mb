import { API_BASE_URL } from "@/constants"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { useMutation } from "@tanstack/react-query"
import { getAddress } from "viem"

export const usePlayerActions = () => {
  const { address } = useGlobalWalletSignerAccount()

  const add = useMutation({
    mutationFn: async() => {
      if (!address) return
      return await (await fetch(`${API_BASE_URL}/players/${getAddress(address || '')}`)).json()
    }
  })

  return {
    add
  }
}