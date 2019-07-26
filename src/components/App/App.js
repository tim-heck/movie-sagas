import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Movie />
        
      </div>
    );
  }
}

export default App;
