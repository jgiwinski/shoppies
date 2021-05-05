import React from 'react';
import './nominee.css'; 

const Nominee = ({ title, year }) => {
    return (
        <div className="nominee-container">
            <button className="remove-btn">Remove</button>
            <h1 className="movie-title">{title}</h1>
            <h2>{year}</h2>
        </div>
    )
}
export default Nominee;
