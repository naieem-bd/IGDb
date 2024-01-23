import useScreenshotList from '../hooks/useScreenshotList';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshotList(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className='grid grid-cols-2 gap-6'>
      {data?.results.map((file) => (
        <img key={file.id} src={file.image} />
      ))}
    </div>
  );
};

export default GameScreenshots;
