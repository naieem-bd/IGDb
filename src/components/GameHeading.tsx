import useGenreName from '../hooks/useGenreName';
import usePlatformName from '../hooks/usePlatformName';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreName(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformName(platformId);

  return (
    <h1 className='text-3xl font-bold mb-3'>
      {platform?.name || ''} {genre?.name || ''} Game
    </h1>
  );
};

export default GameHeading;
