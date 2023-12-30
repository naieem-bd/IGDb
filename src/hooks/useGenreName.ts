import useGenreList from './useGenreList';

const useGenreName = (id?: number) => {
  const { data: genres } = useGenreList();
  return genres?.results.find((g) => g.id === id);
};

export default useGenreName;
