import RenderGenres from './RenderGenres'

function RenderMovies({movie}) {
    const genreArray = [...movie.genres]
    console.log(genreArray)
    return (
    <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {genreArray.map((genre) => <RenderGenres key={genre} genre={genre} />)}
        </ul>
        
    </div>
    )
}

export default RenderMovies