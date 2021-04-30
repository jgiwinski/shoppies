import React from 'react';

const Searchbar = ({ handleSearchEntry, searchByWord, searchField }) => {
    return (
        <form>
            <input className="search-bar"
                type={"text"}
                placeholder={"SEARCH TITLES"}
                name={"searchField"}
                value={searchField}
                onChange={event => handleSearchEntry(event)}
            ></input>
            <button className="submit-btn" onClick={event => searchByWord(event)}>Submit</button>
        </form>
    )
}
export default Searchbar;
