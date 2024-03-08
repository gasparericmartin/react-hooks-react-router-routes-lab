import React from "react";
import { directors } from "../data";
import RenderDirectors from './RenderDirectors'

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => <RenderDirectors key={director.name} director={director} />)}
    </div>
  )
}

export default Directors;
