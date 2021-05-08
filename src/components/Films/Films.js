import React from 'react';
import Movie from '../Movie/Movie';
import './films.css';
import PropTypes from 'prop-types';

const Films = ({ searched, nominateFilm }) => {
    const searchedFilms = searched.map(film => {
            return (
                <Movie
                    key={film.imdbID}
                    title={film.Title}
                    year={film.Year}
                    poster={film.Poster}
                    imdbID={film.imdbID}
                    nominateFilm={nominateFilm}
                 />
            )
    })

    return (
       <section className="gridDisplay">
           {searchedFilms}
       </section>
    )
}
export default Films;

Films.propTypes = {
    searched: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string, 
    year: PropTypes.string, 
    poster: PropTypes.string,
    imdbID: PropTypes.string,
    nominateFilm: PropTypes.func
}