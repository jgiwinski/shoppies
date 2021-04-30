import React from 'react';

const Movie = ({ title, year, poster }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{year}</h2>
            <img src={poster} alt={"Movie Poster"}></img>
        </div>
    )
}
export default Movie;
