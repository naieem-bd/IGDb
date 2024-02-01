import React from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import useGenreList from '../hooks/useGenreList';
import { useNavigate } from 'react-router-dom';
import useGameQueryStore from '../store';
import croppedImgUrl from '../services/img-cropping';

const DrawerSideBar = () => {
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
    <div className='drawer inline-block sm:hidden w-auto'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer' className='btn btn-sm drawer-button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5 stroke-current'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <div className='app-sidebar w-56'>
          <h2 className='text-lg text-slate-100 font-bold px-3 py-4'>
            Categories
          </h2>
          <ul>
            {data?.results.map((genre) => (
              <li key={genre.id}>
                <label
                  className='flex px-3 py-2'
                  onClick={() => handleButtonClick(genre.id)}
                  htmlFor='my-drawer'>
                  <img
                    className='w-7 mr-2'
                    src={croppedImgUrl(genre.image_background)}
                  />
                  <p>{genre.name}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerSideBar;
