import React, { useState } from "react";
import GameCard from "../gameCard/gameCard";
import useFetch from "./../../hooks/useFetch";

function GameList() {
  const [filter, setFilter] = useState({
    platform: "browser",
    sortBy: "relevance",
  });

  const { games } = useFetch(filter);

  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} />
      ))}
    </>
  );
}

export default GameList;
