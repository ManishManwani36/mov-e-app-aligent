import React from 'react'
import MovieRatings from './MovieRatings'

function MovieDetails(props) {
    const ratings = props.movieDetailsRatings
    const WatchListComponent = props.watchListComponent;

    let detailsExist = props.movieDetails;
    if (detailsExist.Title) {
    return (
        <>
            <div className="movie-details-container col" >
                <div className="movie-info row">
                    <figure className="poster-wrapper">
                        <img src={props.movieDetails.Poster} alt="" className="poster" />
                    </figure>
                    <div className="info-container">
                        <div className="watchlist-button-wrapper"
                            onClick={() => props.handleWatchListClick(props.movieDetails)}
                        >
                            <WatchListComponent />
                        </div>
                        <div className="info-wrapper">
                            <h1 className="movie-title">
                                {props.movieDetails.Title}
                            </h1>
                            <div className="info-features row">
                                <div className="age-rating">
                                    {props.movieDetails.Rated}
                                </div>
                                {props.movieDetails.Year}
                                &middot;
                                {props.movieDetails.Genre}
                                &middot;
                                {props.movieDetails.Runtime}
                            </div>
                            <div className="info-cast">
                                {props.movieDetails.Actors}
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="movie-plot">
                    <p>
                        {props.movieDetails.Plot}
                    </p>
                </div>

                <hr />

                <div className="movie-ratings row">
                    <MovieRatings  ratings = {ratings}/>
                </div>

            </div>
        </>
    )}

    else {
        return (
            <div className = "skeleton">
            
            </div>
        )
    }
}

export default MovieDetails
