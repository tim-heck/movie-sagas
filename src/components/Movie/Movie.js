import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movie extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
            <>
                {JSON.stringify(this.props.reduxStore.movies)}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(Movie);