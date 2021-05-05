import React from 'react';
import './nominated.css'; 
import Nominee from '../Nominee/Nominee'; 

const Nominated= ({ nominatedFilms, removeFilm }) => {

    const nominatedTitles = nominatedFilms.map(film => {
        return (
            <Nominee 
                id={film.imdbID}
                title={film.Title}
                year={film.Year}
                removeFilm={removeFilm}
            />
        )
    })

    return (
        <section className="nominated-container">
            <h1>nominted goes here</h1>
            {nominatedTitles}
        </section>
    )
}
export default Nominated;
