import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import croppedImgUrl from "../services/img-cropping";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card bg-white rounded">
      <figure>
        <Link to={"/games/" + game.slug}>
          <img src={croppedImgUrl(game.background_image)} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body p-3">
        <h1 className="text-lg font-bold line-clamp-1 hover:text-slate-950">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </h1>
        <div className="flex justify-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map((item) => item.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
