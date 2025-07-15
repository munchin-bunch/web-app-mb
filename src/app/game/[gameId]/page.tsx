export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  const gamesIds = [{ gameId: "333" }];

  return gamesIds;
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  // const { gameId } = useParams() as GameParams;

  // console.log("Game ID :", gameId);
  // const game = await fetchGameFromServer();

  // useEffect(() => {
  //   setLoading(true);

  //   fetchGame(gameId);

  //   setLoading(false);
  // }, [gameId]);

  // if (!gameId) return notFound();

  return <div>HI GAME with ID: {gameId} </div>;
}
