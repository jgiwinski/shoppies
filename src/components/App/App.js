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
    console.log(event.target.id)
    this.setState({ nominatedFilms: [...this.state.nominatedFilms, event.target.id]})
    console.log(this.state.nominatedFilms)
  }

  render () {
    return (
      <div>
        <Header />
        <SearchBar 
            handleSearchEntry={this.handleSearchEntry}
            searchTitle={this.searchTitle}
            /> 
        <Nominated />
        <Films 
            searched={this.state.searched}
            nominateFilm={this.nominateFilm}
            />
      </div>
    );
  }
}

export default App;
