import React from 'react';
import './nominee.css'; 

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
