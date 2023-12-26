import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import DataFetcher from '../services/data-fetcher';
import { Platform } from '../entities/Platform';

const dataFetcher = new DataFetcher<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: dataFetcher.fetchAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
