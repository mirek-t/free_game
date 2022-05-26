import React from "react";

function GameCard({ game: { thumbnail, title, genre, short_description } }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        maxWidth: "300px",
        bordedRadius: "4px",
      }}
    >
      <img
        src={thumbnail}
        alt="image"
        style={{ width: "100%", bordedRadius: "4px" }}
      />
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Description: {short_description}</p>
    </div>
  );
}

export default GameCard;
