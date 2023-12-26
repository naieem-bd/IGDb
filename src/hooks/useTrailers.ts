import { useQuery } from '@tanstack/react-query';
import DataFetcher from '../services/data-fetcher';
import { Trailer } from '../entities/Trailer';

const useTrailers = (gameId: number) => {
  const dataFetcher = new DataFetcher<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: dataFetcher.fetchAll,
  });
};

export default useTrailers;
