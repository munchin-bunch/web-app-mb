import { fetchGamesList } from "@/api/handlers";
import { GameCard } from "@/components";
import { GamesList } from "@/components/GamesList";
import { useGames } from "@/hooks/useGames";

const GAME_CARD_ACTION_BTN_LABEL = "Let's Munch It";

export default async function CurrentGamesPage() {
  return <GamesList />
}

// const games = await fetchGamesList();
// console.log("games :", games);
// if (!games) return;

// return (
//   <>
//     {
//       games.map((game, idx) => (
//         <GameCard
//           key={game.id}
//           game={game}
//           gameIndex={idx}
//           buttonActionLabel={GAME_CARD_ACTION_BTN_LABEL}
//         />
//       ))
//     }
//   </>
// );