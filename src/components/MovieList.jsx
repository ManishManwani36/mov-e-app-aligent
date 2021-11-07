import React from 'react'

function MovieList(props) {
    const WatchListComponent = props.watchListComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="row movie-list-item">
                    <div className="image-container d-flex justify-content-start m-3">
                        <img src={movie.Poster} alt='movie'></img>
                        {/* <div onClick={()=> props.handleWatchListClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <WatchListComponent/>
                        </div> */}
                    </div>
                    <div className="title-container">
                        <p className="title">{movie.Title}</p>
                        <p className="year">{movie.Year}</p>
                    </div>
                </div>

            ))}
        </>
    )
}

export default MovieList
