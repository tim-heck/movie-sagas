import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
    render() {
        return (
            <div>
                {this.props.reduxStore.details.map(movie =>
                    <>
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                    </>
                )}
            </div>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(MovieDetails);