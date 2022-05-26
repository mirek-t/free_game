import React from "react";

function GameCard({ game: { thumbnail } }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <img src={thumbnail} alt="" />
    </div>
  );
}

export default GameCard;
