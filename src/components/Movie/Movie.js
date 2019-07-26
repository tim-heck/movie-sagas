import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import MovieItem from '../MovieItem/MovieItem';

class Movie extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    movieDetails = (movieToGet) => {
        this.props.history.push('/details');
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: movieToGet});
    }

    render() {
        return (
            <>
            <Header textToShow="Movies" />
            <div>
                <ul>
                    {this.props.reduxStore.movies.map((movieInfo, i) => 
                        <MovieItem key={i} movie={movieInfo} goToDetails={() => this.movieDetails(movieInfo)}/>
                    )}
                </ul>
            </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(Movie);