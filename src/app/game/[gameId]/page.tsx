"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { GameParams } from "@/types";

const fetchGame = async (gameId: string) => {
  return { name: "test", id: "17" };
};

export default function GamePage() {
  const [loading, setLoading] = useState(true);
  const { gameId } = useParams() as GameParams;

  if (!gameId) return notFound();

  console.log("Game ID :", gameId);
  // const game = await fetchGameFromServer(gameId);

  useEffect(() => {
    setLoading(true);

    fetchGame(gameId);

    setLoading(false);
  }, [gameId]);

  return <div>HI GAME with ID </div>;
}
