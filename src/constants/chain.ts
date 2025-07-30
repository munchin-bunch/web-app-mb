import { abstract, abstractTestnet } from "viem/chains";
import store from 'store'

export const chain = store.get('@network', 'testnet') ? abstractTestnet : abstract