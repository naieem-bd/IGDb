import { Game } from '../entities/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import croppedImgUrl from '../services/img-cropping';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure>
        <img src={croppedImgUrl(game.background_image)} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h1 className='text-xl font-bold'>
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </h1>
        <div className='flex justify-between'>
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
