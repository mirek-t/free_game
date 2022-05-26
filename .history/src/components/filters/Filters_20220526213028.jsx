import React from "react";

import { PLATFORMS } from "./constants";

function Filters() {
  return (
    <>
      <label for="platform">Platform: </label>
      <select name="platform" id="platform">
        {PLATFORMS.map(({ value, display }) => (
          <option value={value}>{display}</option>
        ))}
      </select>
    </>
  );
}

export default Filters;
