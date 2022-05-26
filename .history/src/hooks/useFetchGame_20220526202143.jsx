import axios from "axios";
import { useEffect } from "react";

function useFetchGame(id) {
  const [game, setGame] = useState({});

  useEffect(() => {
    getData(id);
  }, []);

  const getData = (id) => {
    axios
      .get(`/game`, {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "X-RapidAPI-Host": API_HOST,
          "X-RapidAPI-Key": API_KEY,
        },
        params: {
          id,
        },
      })
      .then((response) => setGame(response.data))
      .catch((error) => setGame({}));
  };

  return { game };
}

export default useFetchGame;
