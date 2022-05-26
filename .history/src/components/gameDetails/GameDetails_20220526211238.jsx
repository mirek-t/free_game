import React from "react";
import { useParams } from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {
  const { id } = useParams();

  const {
    game: {
      title,
      game_url,
      status,
      platform,
      publisher,
      release_date,
      description,
      screenshots,
    },
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
      <p>
        <b>Publisher</b>: {publisher}, <b>Release date</b>: {release_date}
      </p>
      <p>{description}</p>
      <div>
        {screenshots &&
          screenshots.map(({ image, id }) => (
            <img
              style={{ maxWidth: "200px", width: "100%", padding: "10px" }}
              src={image}
              alt={image.split("/")[5].split(".")[0]}
              key={id}
            />
          ))}
      </div>
    </div>
  );
}

export default GameDetails;
