import React, { useState } from "react";
import Filters from "../filters/Filters";
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
      <Filters setFilter={setFilter} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default GameList;
