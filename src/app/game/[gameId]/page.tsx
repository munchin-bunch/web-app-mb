export const dynamic = "force-dynamic";

("use client");

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { GameParams } from "@/types";

const fetchGame = async (gameId: string) => {
  return { name: "test", id: "17" };
};

export default function GamePage() {
  const [loading, setLoading] = useState(true);
  const { gameId } = useParams() as GameParams;

  console.log("Game ID :", gameId);
  // const game = await fetchGameFromServer(gameId);

  useEffect(() => {
    setLoading(true);

    fetchGame(gameId);

    setLoading(false);
  }, [gameId]);
  if (!gameId) return notFound();

  return <div>HI GAME with ID </div>;
}
