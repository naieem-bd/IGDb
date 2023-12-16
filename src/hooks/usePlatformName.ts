import usePlatforms from "./usePlatforms";

const usePlatformName = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find(
    (p) => p.id === id
  );
}

export default usePlatformName