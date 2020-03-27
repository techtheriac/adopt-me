import React from "react";
import { map } from "ramda";

const deathrow = [
  "Bill Cosby",
  "Anthony Joshua",
  "Randy Houston",
  "Sean Leon",
  "Mat Rhudrudtsch",
  "Lawrence Ashley"
];

const RamdaComponent = () => {
  const componentize = x => <li>{x}</li>;
  return <ul>{map(componentize, deathrow)}</ul>;
};

export default RamdaComponent;
