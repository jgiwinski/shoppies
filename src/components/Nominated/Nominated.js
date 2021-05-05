import React from 'react';
import './nominated.css'; 
import Nominee from '../Nominee/Nominee'; 

const Nominated= () => {

    // const nominatedFilms = nominated.map(film => {
    //     return (
    //         <Nominee 
    //             title={film.title}
    //             year={film.year}
    //         />
    //     )
    // })

    return (
        <section className="nominated-container">
            <h1>nominted goes here</h1>
            {/* {nominatedFilims} */}
        </section>
    )
}
export default Nominated;
