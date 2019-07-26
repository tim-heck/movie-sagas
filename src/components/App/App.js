import React, { Component } from 'react';
import './App.css';
import Movie from '../Movie/Movie';
import Genre from '../Genre/Genre';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Movie />
        {/* <Genre /> */}
      </div>
    );
  }
}

export default App;
