import { formatUnits, parseUnits } from "viem"

export const fromUsdt = (amount: bigint) => formatUnits(amount, 6) 
export const toUsdt = (amount: string) => parseUnits(amount, 6)