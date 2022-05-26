import axios from "axios";
import React from "react";

function useFetchGame(id) {
  const [game, setGame] = useState({});

  const getData = (id) => {
    axios.get(`/game`, {
      baseURL: `https://${API_HOST}/api`,
      headers: {
        "X-RapidAPI-Host": API_HOST,
        "X-RapidAPI-Key": API_KEY,
      },
      params: {
        id,
      },
    });
  };

  return;
}

export default useFetchGame;
