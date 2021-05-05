import React from 'react';
import './movie.css'; 

const Movie = ({ title, year, poster }) => {
    return (
        <div className="movie">
            <button className="nominate-btn">Nominate!</button>
            <h1 className="movie-title">{title}</h1>
            <h2>{year}</h2>
            <img src={poster} alt={"Movie Poster"}></img>
        </div>
    )
}
export default Movie;
