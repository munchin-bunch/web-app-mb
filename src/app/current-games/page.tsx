import { fetchGamesList } from "@/api/handlers";
import { GameCard } from "@/components";
import { mockCurrentGames } from "@/mocks";

const GAME_CARD_ACTION_BTN_LABEL = "Let's Munch It";

export default async function CurrentGamesPage() {
  const games = await fetchGamesList();
  // console.log("games :", games);
  return (
    <>
      {games.map((game, idx) => (
        <GameCard
          key={game.id}
          game={game}
          gameIndex={idx}
          buttonActionLabel={GAME_CARD_ACTION_BTN_LABEL}
        />
      ))}
    </>
  );
}
