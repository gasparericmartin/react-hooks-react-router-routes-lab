import React from "react";
import { actors } from "../data";
import RenderActors from './RenderActors'

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => <RenderActors key={actor.name} actor={actor} />)}
    </div>
  )
}

export default Actors;
