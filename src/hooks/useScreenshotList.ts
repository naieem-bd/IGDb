import { useQuery } from '@tanstack/react-query';
import DataFetcher from '../services/data-fetcher';
import { Screenshot } from '../entities/Screenshot';

const useScreenshotList = (gameId: number) => {
  const dataFetcher = new DataFetcher<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: dataFetcher.fetchAll,
  });
};

export default useScreenshotList;
