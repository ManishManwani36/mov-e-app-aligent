import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddWatchlist from './components/AddWatchlist';
import RemoveWatchlist from './components/RemoveWatchlist';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([])
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=68a28605`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
		const movieWatchList = JSON.parse(
			localStorage.getItem('react-movie-app-watchList')
		);

		if (movieWatchList) {
			setWatchList(movieWatchList);
		}
	}, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-watchList', JSON.stringify(items));
  }

  const addWatchListMovie = (movies) => {
    const newWatchListArray = [...watchList, movies];
    setWatchList(newWatchListArray);
    saveToLocalStorage(newWatchListArray);
  };

  const removeWatchListMovie = (movies) => {
    const newWatchListArray = watchList.filter((watchList)=>watchList.imdbID !== movies.imdbID);
    setWatchList(newWatchListArray);
    saveToLocalStorage(newWatchListArray);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = "Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies = {movies} handleWatchListClick={addWatchListMovie} watchListComponent = {AddWatchlist}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = "WatchList"/>
      </div>
      <div className="row">
        <MovieList movies = {watchList} handleWatchListClick={removeWatchListMovie} watchListComponent = {RemoveWatchlist}/>
      </div>
    </div>
  );
}

export default App;
