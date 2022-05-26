import React from "react";
import { useParams } from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
  const { id } = useParams();

  const { game } = useFetchGame(id);

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "auto",
        padding: "10px",
      }}
    ></div>
  );
}

export default GameDetails;
