import useIntroVideo from '../hooks/useIntroVideo';

interface Props {
  gameId: number;
}

const GameIntroVideo = ({ gameId }: Props) => {
  const { data, error, isLoading } = useIntroVideo(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls></video>
  );
};

export default GameIntroVideo;
