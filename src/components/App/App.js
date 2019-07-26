import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Movie from '../Movie/Movie';
import Genre from '../Genre/Genre';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditDetails from '../EditDetails/EditDetails';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Movie}/>
          <Route exact path="/details" component={MovieDetails} />
          <Route exact path="/edit" component={EditDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
