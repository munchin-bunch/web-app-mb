"use client"

import { useAbstractClient } from "@abstract-foundation/agw-react"
import { createPublicClient, http, webSocket } from "viem"
import { abstract, abstractTestnet } from "viem/chains"

const WS_ABS_TEST_URL = `wss://api.testnet.abs.xyz/ws`
const WS_ABS_URL = `wss://api.mainnet.abs.xyz/ws`

export const useChain = () => {
  const client = useAbstractClient()
  return client.data?.chain
}

export const useClient = () => {
  const chain = useChain()
  const url = chain?.id === 11124 ? WS_ABS_TEST_URL : WS_ABS_URL

  return {
    url,
    chain: chain?.id === 11124 ? abstractTestnet : abstract,
    client: chain && createPublicClient({ chain, transport: http() }),
    wsClient: chain && createPublicClient({ chain, transport: webSocket(url) })
  }
}

export const useExplorer = () => {
  const chain = useChain()

  return {
    toAddr: (address: string) => `${chain?.blockExplorers?.default.url}/address/${address}`,
    toTx: (tx: string) => `${chain?.blockExplorers?.default.url}/tx/${tx}`,
  }
}