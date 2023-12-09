import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginY={5}>
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Game
    </Heading>
  );
};

export default GameHeading;
