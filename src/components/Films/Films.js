import React from 'react';
import Movie from '../Movie/Movie';
import './films.css';

const Films = ({ searched, nominateFilm }) => {
    const searchedFilms = searched.map(film => {
        return (
            <Movie
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
                imdbID={film.imdbID}
                nominateFilm={nominateFilm}
             />
        )
    }
    )
    return (
       <section className="gridDisplay">
           {searchedFilms}
       </section>
    )
}
export default Films;
