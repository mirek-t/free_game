import React, { useState } from "react";
import GameCard from "../gameCard/GameCard";
import useFetch from "./../../hooks/useFetch";

function GameList() {
  const [filter, setFilter] = useState({
    platform: "browser",
    sortBy: "relevance",
  });

  const { games } = useFetch(filter);

  return (
    <div style={{ display: "flex" }}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
