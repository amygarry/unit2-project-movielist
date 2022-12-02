import MovieCard from "./MovieCard"

function Watchlist (props){
    let movieDisplay=props.list.map((movie)=>(<MovieCard movie={movie}/>))
    return(
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default Watchlist