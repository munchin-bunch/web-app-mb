import { GameCard } from "@/components";
import { mockCurrentGames } from "@/mocks";

const GAME_CARD_ACTION_BTN_LABEL = "Let's Munch It";

export default function CurrentGamesPage() {
  return (
    <>
      {mockCurrentGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          buttonActionLabel={GAME_CARD_ACTION_BTN_LABEL}
        />
      ))}
    </>
  );
}
