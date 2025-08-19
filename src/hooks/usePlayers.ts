"use client";

import { supa } from "@/utils/supa";
import { useQuery } from "@tanstack/react-query";

export const usePlayers = () => {
  return useQuery({
    queryKey: [`players`],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      return await supa
        .from('players')
        .select()
        .order('created_at', { ascending: false })
    },
  });
};
