import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import FilterYear from './components/FilterYear';
import FilterType from './components/FilterType';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  // const [watchList, setWatchList] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterType, setFilterType] = useState('');


  const getMovieRequest = async (searchValue, filterYear, filterType) => {
    console.log(filterType)
    const url = `https://www.omdbapi.com/?s=${searchValue}&y=${filterYear}&type=${filterType}&apikey=68a28605`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

    if (responseJson.totalResults) {
      setResults(responseJson.totalResults);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue, filterYear, filterType);
  }, [searchValue, filterYear, filterType]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center navigation">
        <div className="search">
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="filter">
          <FilterYear filterYear={filterYear} setFilterYear={setFilterYear} />
          <FilterType filterType={filterType} setFilterType={setFilterType} />
        </div>
      </div>

      <div className="row content">
        <div className="col movie-list">
          <p className="results">{results} Results</p>
          <MovieList movies={movies} />
        </div>

        <div className="col movie-details">
          <MovieDetails />
        </div>
      </div>

    </div>
  );
}

export default App;
