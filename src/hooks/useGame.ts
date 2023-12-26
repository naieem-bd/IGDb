import { useQuery } from '@tanstack/react-query';
import DataFetcher from '../services/data-fetcher';
import { Game } from '../entities/Game';

const dataFetcher = new DataFetcher<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => dataFetcher.fetchById(slug),
  });

export default useGame;
