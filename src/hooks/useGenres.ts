import { useQuery } from '@tanstack/react-query';
import DataFetcher from '../services/data-fetcher';
import genres from '../data/genres';
import { Genre } from '../entities/Genre';

const dataFetcher = new DataFetcher<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: dataFetcher.fetchAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
