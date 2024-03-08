import RenderDirectorMovies from "./RenderDirectorMovies"


function RenderActors({actor}) {
    return (
        <div>
        <p>{actor.name}</p>
        <ul>
          {actor.movies.map((movie) => <RenderDirectorMovies key={movie} movie={movie} />)}
        </ul>
        
      </div>
    )
}

export default RenderActors