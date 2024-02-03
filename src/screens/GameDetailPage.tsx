import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading)
    return (
      <span className="loading loading-spinner text-warning loading-lg"></span>
    );

  if (error || !game) throw error;

  console.log(game);

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 mt-4">{game.name}</h1>
      <p>{game.description_raw}</p>
      {/* <ExpandableText>{game.description_raw}</ExpandableText> */}
      <GameAttributes game={game} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
