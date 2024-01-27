import { useNavigate } from 'react-router-dom';
import useGenreList from '../hooks/useGenreList';
import croppedImgUrl from '../services/img-cropping';
import useGameQueryStore from '../store';

const SideBar = () => {
  let navigate = useNavigate();

  const { isLoading, error, data } = useGenreList();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <span className='loading loading-spinner text-warning loading-lg'></span>
    );

  const handleButtonClick = (genreId: number) => {
    setGenreId(genreId);
    navigate('/');
  };

  return (
    <>
      <ul className='app-sidebar px-3'>
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className='flex py-1'
            onClick={() => handleButtonClick(genre.id)}>
            <img
              className='w-7 mr-2'
              src={croppedImgUrl(genre.image_background)}
            />
            <p>{genre.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
