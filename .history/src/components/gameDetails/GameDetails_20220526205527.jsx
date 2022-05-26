import React from "react";
import { useParams } from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
  const { id } = useParams();

  const {
    game: { title, game_url, status, platform },
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
        href={game_url}
        style={{ textDecoration: "none", color: "black" }}
        target="_blank"
        rel="noreferrer"
      >
        <h1>
          {title} <span style={{ fontSize: "10px" }}>{status}</span>
        </h1>
      </a>
      <p>{platform}</p>
    </div>
  );
}

export default GameDetails;
