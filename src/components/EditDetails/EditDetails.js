import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
    textArea: {
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    btn: {
        backgroundColor: '#8A3F45',
        color: '#fff',
        padding: '8px 15px',
        margin: '0 4px',
        '&:hover': {
            backgroundColor: '#b5545c',
        },
    },
    btnSave: {
        backgroundColor: '#117372',
        color: '#fff',
        padding: '8px 15px',
        margin: '0 4px',
        '&:hover': {
            backgroundColor: '#1aaead',
        },
    }
});

class EditDetails extends Component {

    state = {
        id: this.props.reduxStore.firstDetails.id,
        title: this.props.reduxStore.firstDetails.title,
        description: this.props.reduxStore.firstDetails.description
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
        const { classes } = this.props;
        return (
            <>
                <Header textToShow="Edit" />
                <div className="container">
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-input"
                            label="Title"
                            className={classes.textField}
                            value={this.state.title}
                            onChange={(event) => this.handleChangeFor(event, 'title')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-multiline-flexible"
                            label="Description"
                            multiline
                            rows="10"
                            cols="100"
                            value={this.state.description}
                            onChange={(event) => this.handleChangeFor(event, 'description')}
                            className={classes.textArea}
                            margin="normal"
                        />
                        <Button className={classes.btn} onClick={() => this.handleClickFor('back')} size="small">Cancel</Button>
                        <Button className={classes.btnSave} onClick={() => this.handleClickFor('save')} size="small">Save</Button>
                    </form>
                </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(EditDetails));