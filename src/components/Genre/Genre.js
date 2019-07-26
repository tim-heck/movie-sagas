import React, { Component } from 'react';
import { connect } from 'react-redux';

class Genre extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GENRES' });
    }

    render() {
        return (
            <>
                {JSON.stringify(this.props.reduxStore.genres)}
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(Genre);