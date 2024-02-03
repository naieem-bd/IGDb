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
      <div className="card bg-white rounded my-6">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-2">{game.name}</h1>
          <div className="flex-none lg:flex gap-6">
            <div className="w-full lg:w-1/3">
              <img
                src={game.background_image}
                alt=""
                className="rounded shadow-lg mb-3"
              />
            </div>
            <div className="w-full lg:w-2/3 mb-3">
              <p>{game.description_raw}</p>
            </div>
          </div>
          <hr className="mb-6 mt-3" />
          <GameAttributes game={game} />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2 mt-6">
        Screenshots from the {game.name}
      </h1>
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
