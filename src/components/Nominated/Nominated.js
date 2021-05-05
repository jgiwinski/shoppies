import React, { Component } from 'react';
import './nominated.css'; 
import Nominee from '../Nominee/Nominee'; 

// class Nominated extends Component  {
//     constructor() {
//       super();
//       }

//       nominateFilm = (event) => {
//         event.preventDefault() 
//         const nominee = this.state.searched.find(film => film.imdbID === event.target.id)
//         console.log(nominee.imdbID)
//         if(!this.state.nominatedFilms.includes(nominee.imdbID)){
//           this.setState({ nominatedFilms: [...this.state.nominatedFilms, nominee]})
//         } else {
//           console.log("looks like you already nominated this film")
//         }
//       }
    
//       removeFilm = (event) => {
//         event.preventDefault()
//         const updatedFilms = this.state.nominatedFilms.filter(film => film.imdbID !== event.target.id )
//         this.setState({ nominatedFilms: updatedFilms })
//       }

//     const nominatedTitles = nominatedFilms.map(film => {
//         return (
//             <Nominee 
//                 id={film.imdbID}
//                 title={film.Title}
//                 year={film.Year}
//                 removeFilm={this.removeFilm}
//             />
//         )
//     })

//         render () {
//             return (
//                 <section className="nominated-container">
//                     <h1>nominted goes here</h1>
//                     {nominatedTitles}
//                 </section>
//             )
//         }
//     }

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
        <section className="nominated-container">
            <h1>nominted goes here</h1>
            {nominatedTitles}
        </section>
    )
}


export default Nominated;
