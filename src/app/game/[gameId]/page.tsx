import { GameBox } from "@/components/GameBox";
import { GameLeaderboard } from "@/components/GameLeaderboard";
import { GameMeta } from "@/components/GameMeta";
import { mockCurrentGames, mockPreviousGames } from "@/mocks";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const gamesIdsT = [...mockCurrentGames, ...mockPreviousGames];

  return gamesIdsT.map((game) => ({
    gameId: game.id,
  }));
}

interface GamePageProps {
  params:  Promise<{ gameId: string }>
}


export default async function GamePage({ params }: GamePageProps) {
  const { gameId } = await params;

  return (
    <>
      {/* <div>HI GAME with ID: {gameId} </div> */}
      <GameBox gameId={gameId} />
      <GameMeta gameId={gameId} />
      <GameLeaderboard gameId={gameId} />
    </>
  );
}