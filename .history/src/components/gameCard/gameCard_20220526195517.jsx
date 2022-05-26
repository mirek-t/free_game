import React from "react";

function GameCard({ game: { thumbnail, title } }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <img src={thumbnail} alt="image" />
      <h2>{title}</h2>
    </div>
  );
}

export default GameCard;
