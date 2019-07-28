import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class EditDetails extends Component {

    state = {
        id: this.props.reduxStore.details.id,
        title: this.props.reduxStore.details.title,
        description: this.props.reduxStore.details.description
    }

    /**
     * Method that keeps track of the user input and updates the state
     */
    handleChangeFor = (event, inputToChange) => {
        console.log(inputToChange);
        this.setState({
            [inputToChange]: event.target.value
        })
    }

    /**
     * Method that dispatches a action for updating the details if changes are made
     * redurects back to the details page
     */
    handleClickFor = (path) => {
        if (path === 'save') {
            this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state })
        }
        this.props.history.push('/details');
    }

    render() {
        return (
            <>
                <Header textToShow="Edit" />
                <div>
                    <button onClick={() => this.handleClickFor('back')}>Cancel</button>
                    <button onClick={() => this.handleClickFor('save')}>Save</button>
                </div>
                <div>
                    <input type="text" value={this.state.title}  onChange={(event) => this.handleChangeFor(event, 'title')} />
                    <br />
                    <textarea rows="10" cols="100" value={this.state.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
                </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(EditDetails);