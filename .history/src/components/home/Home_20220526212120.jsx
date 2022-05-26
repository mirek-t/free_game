import React from "react";
import Filters from "../filters/Filters";
import GameList from "../gameList/GameList";

function Home() {
  return (
    <>
      <Filters />
      <GameList />
    </>
  );
}

export default Home;
