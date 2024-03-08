import RenderDirectorMovies from './RenderDirectorMovies'

function RenderDirectors({director}) {
    return(
        <div>
            <p>{director.name}</p>
            <ul>
              {director.movies.map((movie) => <RenderDirectorMovies key={movie} movie={movie} />)}
            </ul>
            
          </div>
    )
}

export default RenderDirectors