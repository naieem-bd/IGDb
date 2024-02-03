import useScreenshotList from "../hooks/useScreenshotList";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshotList(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.results.map((file) => (
        <img key={file.id} src={file.image} className="rounded shadow" />
      ))}
    </div>
  );
};

export default GameScreenshots;
