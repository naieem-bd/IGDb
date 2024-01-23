import useGenreList from '../hooks/useGenreList';
import croppedImgUrl from '../services/img-cropping';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { isLoading, error, data } = useGenreList();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <span className='loading loading-spinner text-warning loading-lg'></span>
    );

  return (
    <ul>
      {data?.results.map((genre) => (
        <li key={genre.id} className='py-1'>
          <div className='flex'>
            <img
              className='w-7 mr-2'
              src={croppedImgUrl(genre.image_background)}
            />
            <button className='' onClick={() => setGenreId(genre.id)}>
              {genre.name}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
