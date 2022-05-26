import React, { useState } from "react";

import { PLATFORMS } from "./constants";

function Filters() {
  const [platform, setPlatform] = useState(PLATFORMS[0].value);

  const handlePlatform = (e) => {
    setPlatform(e.target.value);
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
    </>
  );
}

export default Filters;
