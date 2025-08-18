import { useMutation } from "@tanstack/react-query"
import { useClient } from "./useCurrentChain"
import { useEffect } from "react"
import { Address, parseAbi, zeroAddress } from "viem"
import { fromUsdt, toUsdt } from "@/utils/number"
import { readContract, waitForTransactionReceipt } from "viem/actions"
import { useGameConfig } from "./useGameConfig"
import { useGlobalWalletSignerAccount, useGlobalWalletSignerClient } from "@abstract-foundation/agw-react"
import { useGameEarners } from "./useGameEarners"
import { EV_PLACED_BET } from "@/constants/game"

export const useBet = (gameAddr: string) => {
  const { address } = useGlobalWalletSignerAccount()
  const { data: signer } = useGlobalWalletSignerClient()
  const { client, wsClient, chain } = useClient()
  const config = useGameConfig(gameAddr)
  const earners = useGameEarners(gameAddr)

  useEffect(() => {
    if (!wsClient) return

    const unwatch = wsClient.watchContractEvent({
      address: gameAddr as Address,
      abi: parseAbi([EV_PLACED_BET]),
      eventName: 'PlacedBet',
      onLogs: async(logs) => {

        console.log("LOGS", logs)

        try {
          const newBets = (logs || []).map((log: any) => ({
            bettor: log?.args?.bettor,
            amount: Number(log?.args?.amount),
            bet_id: Number(log?.args?.bet_id),
            timestamp: Number(log?.args?.timestamp),
            tx_hash: log?.transactionHash,
            address: log?.address,
            name: log?.name,
            blockNum: Number(log?.blockNumber)
          }))
          
          const values = newBets.map((bet: any) => ({ 
            tx_hash: bet.tx_hash,
            amount: fromUsdt(bet.amount),
            block_number: bet.blockNum,
            bettor: bet.bettor,
            game: bet.address,
            bet_at: bet.timestamp,
            bet_id: bet.bet_id,
            chain: chain?.id,
            testnet: chain?.testnet
          })).at(0)

          earners.refetch()
          config.refetch()
          
        } catch(e) {
          console.log("FAILED LOG", e)
        }

      }
    }) 
    return () => {
      unwatch()
    }
  }, [gameAddr])

  const getBetAmount = async() => {
    if (!client) return { value: 0, usdValue: '0' }

    const betAmount = await readContract(client, {
      address: gameAddr as Address,
      abi: parseAbi(["function getBetAmount() view returns (uint256)"]),
      functionName: "getBetAmount",
    })

    return {
      value: betAmount,
      usdValue: fromUsdt(betAmount)      
    }
  }

  const getAllowance = async(tokenAddr: string, account: string, spender: string) => {
    if (!client) return { value: 0, usdValue: '0' }
    const amount = await readContract(client, { 
      address: tokenAddr as Address,
      abi: parseAbi(["function allowance(address,address) view returns (uint256)"]), 
      functionName: "allowance",
      args: [account as Address, spender as Address]
    })
    return {
      value: amount,
      usdValue: fromUsdt(amount)
    }
  }

  const approve = async(tokenAddr: string, spender: string, amount: string) => {
    if (!signer) return
    return await signer.writeContract({
      address: tokenAddr as Address,
      abi: parseAbi(["function approve(address spender, uint256 value) returns (bool)"]),
      functionName: "approve",
      args: [spender as Address, toUsdt(amount)]
    })
  }

  const bet = useMutation({
    mutationKey: [`game-bet`, gameAddr],
    mutationFn: async({ nftId, refAddr }: { nftId: number, refAddr: string }) => {

      if (!gameAddr) return
      if (!client) return

      try {

        const tokenAddr = config.data?.setting.token

        const betAmount = await getBetAmount()
        const allowance = await getAllowance(tokenAddr, address as Address, gameAddr as Address)

        if (allowance?.usdValue < betAmount?.usdValue) {
          await approve(tokenAddr, gameAddr, betAmount?.usdValue)
        }
        
        const hash = await signer?.writeContract({
          address: gameAddr as Address,
          abi: parseAbi(["function bet(uint256 nftId, uint256 amount, address referral)"]),
          functionName: "bet",
          args: [BigInt(nftId), toUsdt(betAmount.usdValue), zeroAddress]          
        })

        const receipt = await waitForTransactionReceipt(client, { hash: hash as Address })

        earners.refetch()
        config.refetch()

        console.log("RECEIPT", hash, receipt)

        console.log("BET AMOUNT", betAmount, nftId, refAddr, address, gameAddr, allowance)
      } catch(e) {
        console.log("FAILED BET", e)
      }
    }
  })

  return {
    bet,
    approve
  }

}