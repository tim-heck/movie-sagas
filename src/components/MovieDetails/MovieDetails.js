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
                    <h2>{this.props.reduxStore.firstDetails.title}</h2>
                    <p>{this.props.reduxStore.firstDetails.description}</p>
                    <h3>Genres</h3>
                    <ul>
                        {this.props.reduxStore.details.map((item, i) => 
                            <li key={i}>{item.genre}</li>
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

export default connect(stateToProps)(MovieDetails);