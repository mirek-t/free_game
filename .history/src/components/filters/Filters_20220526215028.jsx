import React, { useState } from "react";

import { PLATFORMS, GENRES } from "./constants";

function Filters({ setFilter }) {
  const [platform, setPlatform] = useState(PLATFORMS[0].value);
  const [genre, setGenre] = useState(GENRES[0].value);

  const handlePlatform = (e) => {
    setPlatform(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <label for="platform">Platform: </label>
      <select
        name="platform"
        id="platform"
        value={platform}
        onChange={handlePlatform}
      >
        {PLATFORMS.map(({ value, display }) => (
          <option value={value}>{display}</option>
        ))}
      </select>

      <label for="genre">Genre: </label>
      <select name="genre" id="genre" value={genre} onChange={handleGenre}>
        {GENRES.map(({ value, display }) => (
          <option value={value}>{display}</option>
        ))}
      </select>
    </>
  );
}

export default Filters;
