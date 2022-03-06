import { useEffect, useState } from "react";
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";
import './App.css';


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;


const App = () => {


  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }


  useEffect(() => {
    searchMovies('avengers');
  }, [])


  return (
    <div className="app">

      <h1>MovieLand</h1>

      <div className="search">

        <input
          type="text"
          placeholder="Search for movies..."
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searching)}
        />

      </div>

      <div className="container">
        {
          movies.length > 0
            ? (
              movies.map(movie => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                />
              ))
            ) : (
              <div className="empty">
                <h2> No Movie Found </h2>
              </div>
            )
        }
      </div>

    </div>
  )
}

export default App;