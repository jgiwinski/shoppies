import './App.css';
import React, { Component } from 'react'
import { getData } from '../../api'; 
import Header from '../Header/Header'; 
import SearchBar from '../SearchBar/SearchBar'; 
import Nominated from '../Nominated/Nominated'; 
import Films from '../Films/Films'; 

class App extends Component  {
  constructor() {
    super();
    this.state = {
      searched: [],
      nominatedFilms: [],
      searchField: '',
      selected: '', 
      error: ''
    }
  }

  componentDidMount() {
    getData("ram")
      .then(response => this.setState({ searched: response.Search }))
      .catch(error => this.setState({ error: error }))
  }

  handleSearchEntry = event => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField)
  }

  searchTitle = (event) => {
    event.preventDefault(); 
    if(!this.state.error){
      getData(this.state.searchField)
        .then(data => this.setState({ searched: data.Search }))
        .catch(error => this.setState({ error: error }))
    }
  }

  nominateFilm = (event) => {
    event.preventDefault();
    const nominee = this.state.searched.find(film => film.imdbID === event.target.id)
    if(!this.state.nominatedFilms.includes(nominee.imdbID) && this.state.nominatedFilms.length < 5 ){
      this.setState({ nominatedFilms: [...this.state.nominatedFilms, nominee]})
    } else {
      console.log("looks like you already nominated this film")
    }
  }

  removeFilm = (event) => {
    event.preventDefault()
    const updatedFilms = this.state.nominatedFilms.filter(film => film.imdbID !== event.target.id )
    this.setState({ nominatedFilms: updatedFilms })
  }

  render () {
    return (
      <div>
        <Header />
        <SearchBar 
            handleSearchEntry={this.handleSearchEntry}
            searchTitle={this.searchTitle}
            /> 
        <Nominated 
            nominatedFilms={this.state.nominatedFilms}
            removeFilm={this.removeFilm}
            />
        <Films 
            searched={this.state.searched}
            nominateFilm={this.nominateFilm}
            />
      </div>
    );
  }
}

export default App;

// conditional rendering for nominated movies (message for when there are no movies suggested)
// error handling for when user tries to add the same movie twice
// error handling for when there is no movie to display ("plz enter at at least three characters")
// disable nominate button after movie has been nominated 
// limit 5 movies to be  added to nomination list
// make banner when 5 nominations have been added 