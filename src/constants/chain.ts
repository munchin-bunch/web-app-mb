import { abstract, abstractTestnet } from "viem/chains";
import store from 'store'
import { createPublicClient, http } from "viem";

export const network = store.get('@network', 'testnet')
export const isTestnet = network == 'testnet'

export const chain = isTestnet ? abstractTestnet : abstract
export const usdAddr = isTestnet ? `0x110e54fD2aC1402De8e8bCA164c61AB558965eF2` : ``

export const rpcClient = createPublicClient({ chain, transport: http() })