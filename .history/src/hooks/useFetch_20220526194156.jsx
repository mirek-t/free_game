import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_HOST, API_KEY } from "../components/constants/constants";

const localCache = {};

function useFetch({ platform, sortBy, genre, tags }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!localCache[`${platform}${sortBy}${genre}${tags}`]) {
      getData();
    } else {
      setGames(localCache[`${platform}${sortBy}${genre}${tags}`]);
    }
  }, [platform, sortBy, genre, tags]);

  const getData = () => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "X-RapidAPI-Host": API_HOST,
          "X-RapidAPI-Key": API_KEY,
        },
        params: {
          platform,
          category: genre,
          "sort-by": sortBy,
          tags,
        },
      })
      .then((response) => {
        if (response.data.status !== 0) {
          localCache[`${platform}${sortBy}${genre}${tags}`] = response.data;
          setGames(response.data);
        } else {
          setGames([]);
        }
      })
      .catch((error) => {
        setGames([]);
      });
  };

  return { games };
}

export default useFetch;
