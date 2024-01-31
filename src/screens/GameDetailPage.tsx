import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGameDetails from '../hooks/useGameDetails';
import GameIntroVideo from '../components/GameIntroVideo';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading)
    return (
      <span className='loading loading-spinner text-warning loading-lg'></span>
    );

  if (error || !game) throw error;

  return (
    <>
      <h1 className='text-3xl font-bold mb-3'>{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameIntroVideo gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
