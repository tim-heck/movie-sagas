import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class EditDetails extends Component {

    state = {
        title: '',
        description: ''
    }

    handleChangeFor = (event, inputToChange) => {
        if (inputToChange === 'title') {
            this.setState({
                title: event.target.value
            })
        } else {
            this.setState({
                description: event.target.value
            })
        }
    }

    handleClickFor = (path) => {
        console.log(path);
        if (path === 'back') {
            this.props.history.push('/details');
        } else {

        }
    }

    render() {
        return (
            <>
                <Header textToShow="Edit" />
                <div>
                    <button onClick={() => this.handleClickFor('back')}>Cancel</button>
                    <button onClick={() => this.handleClickFor('save')}>Save</button>
                </div>
                <form>
                    <input type="text" onChange={() => this.handleChangeFor('title')} value={this.state.title} />
                    <br />
                    <textarea rows="10" cols="100" onChange={() => this.handleChangeFor('description')} value={this.state.description}></textarea>
                </form>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(stateToProps)(EditDetails);