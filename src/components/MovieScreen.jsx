

import MovieCard from "./MovieCard"

function MovieScreen ({addMovie, movieList}){

    let movieDisplay = movieList.map((movie)=>(<MovieCard movie={movie} addMovie={addMovie}/>))

    return (
        <div className="page">
            <h1>Amy's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen