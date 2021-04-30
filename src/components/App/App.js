import './App.css';
import React, { Component } from 'react'
import { getData } from '../../api'; 
import SearchBar from '../SearchBar/SearchBar'; 
import Films from '../Films/Films'; 

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
      .then(response => this.setState({searched: response.Search}))
      .catch(error => this.setState({ error: error }))
  }

  handleSearchEntry = event => {
    this.setState({ searchField: event.target.value });
  }

  searchTitle(input) {
    getData(input)
      .then(response => this.setState({searched: response.Search}))
      .catch(error => this.setState({ error: error }))
  }

  render () {
    return (
      <div>
        <SearchBar 
            handleSearchEntry={this.handleSearchEntry}
            searchTitle={this.searchTitle}
            /> 
        <Films searched={this.state.searched}/>
      </div>
    );
  }
}

export default App;
