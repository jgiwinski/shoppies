import React from 'react';
import Movie from '../Movie/Movie'

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
        <h1>{searchedFilms}</h1>
    )
}
export default Films;
