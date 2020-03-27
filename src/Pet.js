import React from "react";

//parameter is passed to the component as destructured props object
//hence removing the need to call props.<propName>
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
