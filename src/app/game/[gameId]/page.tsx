import { fetchGamesList } from "@/api/handlers";
import { GameBox } from "@/components/GameBox";
import { GameLeaderboard } from "@/components/GameLeaderboard";

export async function generateStaticParams() {
  const games = await fetchGamesList();

  return games.map((game, idx) => ({
    gameId: game.address,
  }));
}

interface GamePageProps {
  params: Promise<{ gameId: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { gameId } = await params;

  return (
    <section className="flex flex-col gap-14">
      <GameBox gameAddr={gameId} />
      {/* <GameMeta gameId={gameId} /> */}
      <div className="h-4" />
      <GameLeaderboard address={gameId} />
    </section>
  );
}
