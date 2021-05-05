import React from 'react';
import './searchBar.css'; 

const SearchBar = ({ handleSearchEntry, searchTitle, searchField }) => {
    return (
        <form className="search-container ">
            <input className="search-bar"
                type={"text"}
                placeholder={"SEARCH TITLES"}
                name={"searchField"}
                value={searchField}
                onChange={event => handleSearchEntry(event)}
            ></input>
            <button className="submit-btn" onClick={event => searchTitle(event)}>Submit</button>
        </form>
    )
}
export default SearchBar;
