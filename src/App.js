import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import FilterYear from './components/FilterYear';
import FilterType from './components/FilterType';
import MovieDetails from './components/MovieDetails';
import AddWatchlist from './components/AddWatchlist';
import RemoveWatchlist from './components/RemoveWatchlist';
import WatchList from './components/WatchList';
import MovieListHeading from './components/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterYear, setFilterYear] = useState([1970,2021]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [results, setResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieDetailsID, setMovieDetailsID] = useState('');
  const [movieDetailsRatings, setMovieDetailsRatings] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const getMovieRequest = async (searchValue, filterType) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&type=${filterType}&apikey=68a28605`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setFilteredMovies(responseJson.Search)
    }

    if (responseJson.totalResults) {
      setResults(responseJson.totalResults);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue, filterType);
  }, [searchValue, filterType]);

  useEffect(() => {
    const filterMoviesByYear = (filterYear) => {
      setFilteredMovies(movies);
        const result = movies.filter(movie => (movie.Year.substring(0,4) >= filterYear[0] && movie.Year.substring(0,4) <= filterYear[1]));
        setFilteredMovies(result);
    };
    filterMoviesByYear(filterYear)
  }, [filterYear, movies]);


  const getMovieDetailsRequest = async(movieDetailsID) => {
    const url = `https://www.omdbapi.com/?i=${movieDetailsID}&apikey=68a28605`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson)  {
      setMovieDetails(responseJson);
    }

    if(responseJson.Ratings)  {
      setMovieDetailsRatings(responseJson.Ratings);
    }
   
  };

  useEffect(() => {
    getMovieDetailsRequest(movieDetailsID);
  }, [movieDetailsID]);

  const addWatchlistMovie = (movie) => {
    if (watchList.indexOf(movie) === -1) {
      const newWatchListArray = [...watchList, movie];
      setWatchList(newWatchListArray);
    }
    else {
      alert("This Item already exists in your Watchlist");
    }
  };

  const removeWatchlistMovie = (movie) => {
    const newWatchListArray = watchList.filter(
      (watchListMovie)=> watchListMovie.imdbID !== movie.imdbID
    );

    setWatchList(newWatchListArray);
  };

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
          <MovieList 

            movies={filteredMovies}
            setMovieDetailsID={setMovieDetailsID}
          />
        </div>

        <div className="col movie-details">
          <MovieDetails 
            movieDetails={movieDetails} 
            movieDetailsRatings={movieDetailsRatings}
            handleWatchListClick={addWatchlistMovie}
            watchListComponent={AddWatchlist}
          />
          <MovieListHeading heading='WatchList :' />
          <WatchList 
            movies={watchList}
            setMovieDetailsID={setMovieDetailsID}
            handleWatchListClick={removeWatchlistMovie}
            watchListComponent={RemoveWatchlist}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
