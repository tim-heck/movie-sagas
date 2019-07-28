import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import MovieItem from '../MovieItem/MovieItem';

import './MovieList.css';

class MovieList extends Component {

    // Sends an action to get movie list when component is ready
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    /**
     * Method that redirects to /details and sends an action 
     * to get a specific movie's details
     */
    movieDetails = (movieToGet) => {
        this.props.history.push('/details');
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: movieToGet });
    }

    render() {
        return (
            <>
                <Header textToShow="Movies" />
                <div className="container">
                    {this.props.reduxStore.movies.map((movieInfo, i) =>
                        <MovieItem key={i} movie={movieInfo} goToDetails={() => this.movieDetails(movieInfo)} />
                    )}
                </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(MovieList);