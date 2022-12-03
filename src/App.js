import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/WatchList';


function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setList]= useState([])
  const [page, setPage]=useState(1)

  const getData = useCallback(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }, [page])

  useEffect(() => {getData()}, [getData])

  function addMovie(movie) {
    setList(list => {
      return [...list, movie]})
  }

  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
        return mov !== movie;
    });
    setList(newState);
  } 

  return (
    <div className="App">
      <Header></Header>
      <main>
        <MovieScreen
        list={list}
        page={page}
        setPage={setPage}
        movieList={movieList}
        addMovie={addMovie}
        removeMovie={removeMovie}
        />
        <Watchlist
        list={list}
        removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
