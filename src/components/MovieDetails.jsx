import React from 'react'

function MovieDetails() {
    return (
        <>
            <div className="movie-details-container col">
                <div className="movie-info row">
                    <figure className="poster-wrapper">
                        <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt="" className="poster" />
                    </figure>
                    <div className="info-container">
                        <div className="watchlist-button-wrapper">
                            <button type="button" class="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                                Watchlist
                            </button>
                        </div>
                        <div className="info-wrapper">
                            <h1 className="movie-title">
                                Star Wars
                            </h1>
                            <div className="info-features row">
                                <div className="age-rating">
                                    PG
                                </div>
                                1977
                                &middot;
                                Action, Adventure, Fantasy
                                &middot;
                                121 min
                            </div>
                            <div className="info-cast">
                                Mark Hamill, Harrison Ford, Carrie Fisher
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="movie-plot">
                    <p>
                        Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad
                    </p>
                </div>

                <hr />

                <div className="movie-ratings row">
                    <div className="rating-stats ">
                        8.6/10
                        <p>Internet Movie Database</p>
                    </div>
                    <div className="rating-stats ">
                        92%
                        <p>Rotten Tomatoes</p>
                    </div>
                    <div className="rating-stats ">
                        90/100
                        <p>Metacritic</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieDetails
