import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class MovieDetails extends Component {

    handleClickFor = (path) => {
        console.log(path);
        if (path === 'back') {
            this.props.history.push('/');
        } else {
            this.props.history.push('/edit');
        }
    }

    render() {
        return (
            <>
                <Header textToShow="Details" />
                <div>
                    <div>
                        <button onClick={() => this.handleClickFor('back')}>Back to Movies List</button>
                        <button onClick={() => this.handleClickFor('edit')}>Edit</button>
                    </div>
                    <h2>{this.props.reduxStore.details.title}</h2>
                    <p>{this.props.reduxStore.details.description}</p>
                </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(MovieDetails);