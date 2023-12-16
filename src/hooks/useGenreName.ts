import useGenres from "./useGenres";

const useGenreName = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
}

export default useGenreName