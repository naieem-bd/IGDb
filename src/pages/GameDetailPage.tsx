import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGameDetails from '../hooks/useGameDetails';
import GameIntroVideo from '../components/GameIntroVideo';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameIntroVideo gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
