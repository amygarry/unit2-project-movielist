import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/WatchList';


function App() {

  const [movieList, setMovieList] = useState([])
  const [list, setList]= useState([])
  const [page, setPage]=useState(1)

  const getData = () =>{
    axios.get(`//api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res)=>{
      // console.log(res.data)
      setMovieList(res.data.results)
    })
  }

  useEffect(() => {
    getData();
  }, [page])

  const addMovie =(movie)=>{
    setList([...list, movie])
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
        />
        <Watchlist
        list={list}/>
      </main>
    </div>
  );
}

export default App;
