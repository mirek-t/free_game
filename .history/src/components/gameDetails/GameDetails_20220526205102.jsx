import React from "react";
import { useParams } from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
  const { id } = useParams();

  const {
    game: { title },
  } = useFetchGame(id);

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "auto",
        padding: "10px",
      }}
    >
      <a
        href=""
        style={{ textDecoration: "none", color: "black" }}
        target="_blank"
      >
        <h1>{title}</h1>
      </a>
    </div>
  );
}

export default GameDetails;
