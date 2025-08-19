import { supa } from "@/utils/supa"
import { useGlobalWalletSignerAccount } from "@abstract-foundation/agw-react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getAddress } from "viem"

// Get players nfts based on collection
export const usePlayerNfts = (assetAddr: string) => {
  const { address } = useGlobalWalletSignerAccount()

  const sync = useMutation({
    mutationKey: [`nfts`, assetAddr],
    mutationFn: async() => {
      // Get the collection total supply
      // Loop to the collection
    }
  })

  const nfts = useQuery({
    queryKey: [`player-nfts`, assetAddr],
    queryFn: async() => {
      // return collection from supabase, if not existing process sync
      // Loop to each collections owner
      const asset = await supa
        .from('collections')
        .select()
        .eq('address', getAddress(assetAddr))

      if (!!asset.data) {
        await sync.mutateAsync()
      }

    }
  })

  return {
    nfts: nfts.data || []
  }

}