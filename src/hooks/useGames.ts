import { useInfiniteQuery } from '@tanstack/react-query';
import DataFetcher, { FetchResponse } from '../services/data-fetcher';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const dataFetcher = new DataFetcher<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      dataFetcher.fetchAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGames;
