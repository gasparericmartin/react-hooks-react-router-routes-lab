import React from "react";
import { movies } from "../data";
import RenderMovies from './RenderMovies'

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        // console.log(movie)
        return <RenderMovies key={movie.title} movie={movie} />
      })}
    </div>
  )
}

export default Movies;
