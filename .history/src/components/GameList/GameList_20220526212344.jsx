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
    <>
      <Filters />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default GameList;
