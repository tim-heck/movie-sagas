import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie';
import Genre from '../Genre/Genre';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Movie />
        <Genre />
      </div>
    );
  }
}

export default App;
