"use client"
import { useGames } from "@/hooks/useGames"
import { useMemo } from "react"
import { GameCard } from "./GameCard"
import { Spinner } from "./Spinner";

const GAME_CARD_ACTION_BTN_LABEL = "Let's Munch It";

export const GamesList = () => {
  const { data: games = [], isLoading } = useGames()

  const renderGames = useMemo(() => {
    return games.map((game, idx) => (
      <GameCard 
        key={game.id}
        game={game}
        gameIndex={idx}
        buttonActionLabel={GAME_CARD_ACTION_BTN_LABEL}
        />
    ))
  }, [games])

  return isLoading ? <Spinner /> : renderGames
}