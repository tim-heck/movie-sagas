import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class Movie extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.reduxStore.movies.map((movieInfo, i) => 
                        <MovieItem key={i} movie={movieInfo} />
                    )}
                </ul>
            </div>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(Movie);