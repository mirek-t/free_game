import React from 'react';
import {useFetch} from "./../../hooks/useFetch"


function GameList() {

    const {games} = useFetch();

  return (
    <div>GameList</div>
  )
}

export default GameList