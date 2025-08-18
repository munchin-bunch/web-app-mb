"use client";
import { chain } from "@/constants/chain";
import { useQuery } from "@tanstack/react-query";
import { Address, createPublicClient, http, parseAbi } from "viem";
import { GameBet } from "@/types/GameSetting";
import { fromUsdt } from "@/utils/number";
import abi from "@/abis/game.abi.json";

export const useGameBet = (address?: string) => {
<<<<<<< HEAD
  const client = createPublicClient({ chain, transport: http() })
=======
  const client = createPublicClient({ chain, transport: http("") });
>>>>>>> f92b62ffea056748f81f784427a743ce84809654

  return useQuery({
    enabled: !!address,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
<<<<<<< HEAD
    queryKey: [`game-bet`, address],
    queryFn: async() => {
=======
    queryKey: [`game-bet`],
    queryFn: async () => {
>>>>>>> f92b62ffea056748f81f784427a743ce84809654
      try {
        const contractConfig = {
          address: address as Address,
          abi: parseAbi(abi),
        };

        const [nextBetAmount, prizePool, nextBetAt] = await Promise.all([
          client.readContract({
            ...contractConfig,
            functionName: "getBetAmount",
          }),
          client.readContract({
            ...contractConfig,
            functionName: "prizePool",
          }),
          client.readContract({
            ...contractConfig,
            functionName: "nextBetAt",
          }),
        ]);

        return {
          nextBetAmount: fromUsdt(nextBetAmount as bigint),
          prizePool: fromUsdt(prizePool as bigint),
          nextBetAt: nextBetAt,
        } as GameBet;
      } catch (e) {
        console.log(e);
        return {} as GameBet;
      }
    },
  });
};
