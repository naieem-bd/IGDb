import { Heading } from "@chakra-ui/react";
import useGenreName from "../hooks/useGenreName";
import usePlatformName from "../hooks/usePlatformName";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreName(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformName(platformId);

  return (
    <Heading as="h1" marginY={5}>
      {platform?.name || ""} {genre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
