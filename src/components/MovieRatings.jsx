import React from 'react'

function MovieRatings(props) {
    return (
        <>
            {props.ratings.map((rating, index) => (
                <div className="rating-stats" key={index}>
                    <p>{rating.Value}</p>
                    <p>{rating.Source}</p>
                </div>
            ))}
        </>
    )
}

export default MovieRatings
