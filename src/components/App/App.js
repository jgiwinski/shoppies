import './App.css';
import React, { Component } from 'react'
import { getData } from '../../api'; 
import Header from '../Header/Header'; 
import SearchBar from '../SearchBar/SearchBar'; 
import Nominated from '../Nominated/Nominated'; 
import Films from '../Films/Films'; 
import Swal from 'sweetalert2'

class App extends Component  {
  constructor() {
    super();
    this.state = {
      searched: [],
      nominatedFilms: [],
      searchField: '',
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
    // getData(this.state.searchField)
    //     .then(data => this.setState({ searched: data.Search }))
    //     .catch(error => this.setState({ error: error }))
  }

  searchTitle = event => {
    event.preventDefault(); 

    if(!this.state.error){
      getData(this.state.searchField)
        .then(data => this.setState({ searched: data.Search }))
        .catch(error => this.setState({ error: error }))
    }  
  }

  nominateFilm = event => {
    event.preventDefault();
    const nominee = this.state.searched.find(film => film.imdbID === event.target.id)
    const disableButton = document.getElementById(nominee.imdbID)

    if(!this.state.nominatedFilms.includes(nominee.imdbID) && this.state.nominatedFilms.length < 5 ){
      this.setState({ nominatedFilms: [...this.state.nominatedFilms, nominee]})
      disableButton.disabled = true; 
      if (this.state.nominatedFilms.length > 3){
        Swal.fire(
          'You nominated 5 films!',
          'Solid Choices!',
          'success'
        )
      }
    } else {
      Swal.fire(
        'Looks like you already nominated 5 films',
        'Try removing a film from your nominee list before adding this film',
        'warning'
      )
    }
  }

  removeFilm = event => {
    event.preventDefault();
    const updatedFilms = this.state.nominatedFilms.filter(film => film.imdbID !== event.target.id)
    this.setState({ nominatedFilms: updatedFilms })
  }

  render () {
    return (
      <>
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
      </>
    );
  }
}

export default App;

// conditional rendering for nominated movies (message for when there are no movies suggested)
// error handling for when there is no movie to display ("plz enter at at least three characters")
// responsiveness
// readme 
// deploy 