

import MovieCard from "./MovieCard"

function MovieScreen ({addMovie, movieList, page, setPage, list, removeMovie}){

    const decrement = () => setPage(page - 1)
    const increment = () => setPage(page + 1)

    let movieDisplay = movieList.map((movie)=>(
    <MovieCard
     movie={movie} 
     addMovie={addMovie} 
     removeMovie={removeMovie} 
     key={movie.id}
     list={list}
     />))

    return (
        <div className="page">
            <h1>Amy's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 ? decrement : undefined}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen