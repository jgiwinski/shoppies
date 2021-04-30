import './App.css';
import React, { Component } from 'react'
import { getData } from '../../api'; 
import SearchBar from '../SearchBar/SearchBar'

class App extends Component  {
  constructor() {
    super();
    this.state = {
      searched: [],
      nominatedFilms: '',
      error: '',
      searchField: ''
    }
  }

  componentDidMount() {
    getData('ram')
    // .then(response => console.log(response))
      .then(response => this.setState({searched: response}))
      .catch(error => this.setState({ error: error }))
  }

  handleSearchEntry = event => {
    this.setState({ searchField: event.target.value });
  }

  render () {
    return (
      <div>
        <SearchBar handleSearchEntry={this.handleSearchEntry}/> 

      </div>
    );
  }
}

export default App;
