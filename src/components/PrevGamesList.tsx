"use client"
import { usePrevGames } from "@/hooks/useGames"
import { useMemo } from "react"
import { GameCard } from "./GameCard"
import { Spinner } from "./Spinner";

const GAME_CARD_ACTION_BTN_LABEL = "View Game";

export const PrevGamesList = () => {
  const { data: games = [], isLoading } = usePrevGames()

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