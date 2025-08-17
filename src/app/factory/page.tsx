"use client";
import { factoryAddr } from "@/constants/chain";
// import { useGameFactory } from "@/hooks/useGameFactory"
import { useGamesByIds } from "@/hooks/useGamesByIds";
import { useLastGameId } from "@/hooks/useLastGameId";

export default function Factory() {
  // const factory = useGameFactory()
  const lastGameId = useLastGameId(factoryAddr);
  const games = useGamesByIds(factoryAddr);
  console.log("LAST GAME ID", lastGameId.data, games.data);

  return <div></div>;
}
