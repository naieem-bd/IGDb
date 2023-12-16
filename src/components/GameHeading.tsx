import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatformName from "../hooks/usePlatformName";
import useGenreName from "../hooks/useGenreName";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreName(gameQuery.genreId);
  const platform = usePlatformName(gameQuery.platformId);

  return (
    <Heading as="h1" marginY={5}>
      {platform?.name || ""} {genre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
