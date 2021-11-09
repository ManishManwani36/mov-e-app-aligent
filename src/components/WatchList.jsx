import React from 'react'


function WatchList(props) {
    const WatchListComponent = props.watchListComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                    <div className="watchlist-item" key={index}>
                        <div className="row movie-list-item" onClick={() => props.setMovieDetailsID(`${movie.imdbID}`)}>
                            <div className="image-container d-flex justify-content-start m-3">
                                <img src={movie.Poster} alt='movie'></img>
                            </div>
                            <div className="title-container">
                                <p className="title">{movie.Title}</p>
                                <p className="year">{movie.Year}</p>
                            </div>

                        </div>
                        <div className="watchlist-button-wrapper"
                            onClick={() => props.handleWatchListClick(movie)}
                        >
                            <WatchListComponent />
                        </div>
                    </div>
            ))}
        </>
    )
}

export default WatchList
