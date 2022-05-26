import React from "react";

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
