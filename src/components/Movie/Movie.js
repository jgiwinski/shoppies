import React from 'react';
import './movie.css'; 
import PropTypes from 'prop-types';

const Movie = ({ title, year, poster, imdbID, nominateFilm }) => {

    return (
        <div className="movie">
            <button className="nominate-btn annimate" id={imdbID} onClick={event => nominateFilm(event)}>Nominate!</button>
            <h1 className="movie-title">{title}</h1>
            <h2>{year}</h2>
            <img src={poster} alt={"Movie Poster"}></img>
        </div>
    )
}

export default Movie;


Movie.propTypes = {
    title: PropTypes.string, 
    year: PropTypes.string, 
    poster: PropTypes.string,
    imdbID: PropTypes.string,
    nominateFilm: PropTypes.func
}