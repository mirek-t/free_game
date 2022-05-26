import React from "react";
import { useFetch } from "./../../hooks/useFetch";

function GameList() {
  const { games } = useFetch();

  return <pre>{games}</pre>;
}

export default GameList;
