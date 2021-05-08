import React from 'react';
import './nominated.css'; 
import Nominee from '../Nominee/Nominee'; 
import PropTypes from 'prop-types';

const Nominated = ({ nominatedFilms, removeFilm }) => {

    const nominatedTitles = nominatedFilms.map(film => {
        return (
            <Nominee 
                key={film.imdbID}
                id={film.imdbID}
                title={film.Title}
                year={film.Year}
                removeFilm={removeFilm}
            />
        )
    })

    return (
        <div className="nominated-container">
            <h1 className="nominated-box-title">Nominated Films</h1>
            <section className="nominated-films">
                {nominatedTitles}
            </section>
        </div>
    )
}

export default Nominated;

Nominated.propTypes = {
    nominatedFilms: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string, 
    year: PropTypes.string, 
    title: PropTypes.string,
    removeFilm: PropTypes.func
}