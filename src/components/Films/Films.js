import React from 'react';
import Movie from '../Movie/Movie';
import './films.css';

const Films = ({ searched }) => {
    const searchedFilms = searched.map(film => {
        return (
            <Movie
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
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
