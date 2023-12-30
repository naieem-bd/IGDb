import useIntroVideo from '../hooks/useIntroVideo';

interface Props {
  gameId: number;
}

const GameIntroVideo = ({ gameId }: Props) => {
  const { data, error, isLoading } = useIntroVideo(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const videoSource = data?.results[0]?.data?.[480];
  const videoThumb = data?.results[0]?.preview;

  if (!videoSource) return null;

  return <video src={videoSource} poster={videoThumb} controls></video>;
};

export default GameIntroVideo;
