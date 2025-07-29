import { mockCurrentGames, mockPreviousGames } from "@/mocks";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const gamesIdsT = [...mockCurrentGames, ...mockPreviousGames];

  return gamesIdsT.map((game) => ({
    gameId: game.id,
  }));
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;

  return <div>HI GAME with ID: {gameId} </div>;
}
