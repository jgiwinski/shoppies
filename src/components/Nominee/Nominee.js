import React from 'react';
import './nominee.css'; 
import PropTypes from 'prop-types';

const Nominee = ({ title, year, id, removeFilm }) => {
    
    return (
        <div className="nominee-container">
            <h2 className="movie-title">{title}</h2>
            <h2 className="movie-year">{year}</h2>
            <button className="remove-btn" id={id} onClick={event => removeFilm(event)}>Remove</button>
        </div>
    )
}

export default Nominee;

Nominee.propTypes = {
    id: PropTypes.string, 
    year: PropTypes.string, 
    title: PropTypes.string,
    removeFilm: PropTypes.func
}