import React from "react";
import { useParams } from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
  const { id } = useParams();

  const game = useFetchGame(id);

  return;
}

export default GameDetails;
