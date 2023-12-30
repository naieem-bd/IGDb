import usePlatformList from './usePlatformList';

const usePlatformName = (id?: number) => {
  const { data: platforms } = usePlatformList();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformName;
