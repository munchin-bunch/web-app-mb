import { GameCard } from "@/components";
import { mockPreviousGames } from "@/mocks";

const GAME_CARD_ACTION_BTN_LABEL = "Winners";
export default function PreviousGamesPage() {
  return (
    <>
      {mockPreviousGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          buttonActionLabel={GAME_CARD_ACTION_BTN_LABEL}
        />
      ))}
    </>
  );
}
