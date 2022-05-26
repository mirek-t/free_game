import React from "react";

import { PLATFORMS } from "./../filters/constants";

function Filters() {
  return (
    <>
      <label for="platform">Platform: </label>
      <select name="platform" id="platform">
        <option value={PLATFORMS}></option>
      </select>
    </>
  );
}

export default Filters;
