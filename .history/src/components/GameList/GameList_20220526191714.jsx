import React from "react";
import useFetch from "./../../hooks/useFetch";

function GameList() {
  const { games } = useFetch();

  return <pre>{JSON.stringify(games, null, 4)}</pre>;
}

export default GameList;
