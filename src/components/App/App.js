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
    event.preventDefault() 
    const nominee = this.state.searched.find(film => film.imdbID === event.target.id)
    console.log(nominee.imdbID)
    if(!this.state.nominatedFilms.includes(nominee.imdbID)){
      this.setState({ nominatedFilms: [...this.state.nominatedFilms, nominee]})
    } else {
      console.log("looks like you already nominated this film")
    }
  }

  removeFilm = (event) => {
    event.preventDefault()
    // const nominee = this.state.nominatedFilms.find(film => film.imdbID === event.target.id)
    const updatedFilms = this.state.nominatedFilms.filter(film =>film.imdbID !== event.target.id )
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
