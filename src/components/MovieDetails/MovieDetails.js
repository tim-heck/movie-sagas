import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    card: {
        maxWidth: 1260,

    },
    title: {
        fontSize: 30,
        textAlign: 'left',
    },
    description: {
        textAlign: 'left',
    },
    genres: {
        fontSize: 20,
        textAlign: 'left'
    },
    list: {
        maxWidth: 600
    },
    listItems: {
        display: 'inline'
    },
});

class MovieDetails extends Component {

    /**
     * Method that redirects to the home page or /edits depending on
     * what button was clicked
     */
    handleClickFor = (path) => {
        console.log(path);
        if (path === 'back') {
            this.props.history.push('/');
        } else {
            this.props.history.push('/edit');
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Header textToShow="Details" />
                <div className="container">
                    {/* <div>
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
                    </div> */}
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {this.props.reduxStore.firstDetails.title}
                            </Typography>
                            <Typography className={classes.description} component="p">
                                {this.props.reduxStore.firstDetails.description}
                            </Typography>
                            <List component="nav">
                                <Typography className={classes.genres} component="p">Genres</Typography>
                                <ListItem className={classes.list}>
                                    {this.props.reduxStore.details.map((item, i) => 
                                        <ListItemText className={classes.listItems} key={i} primary={item.genre} />
                                    )}
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => this.handleClickFor('back')} size="small">Back to Movies List</Button>
                            <Button onClick={() => this.handleClickFor('edit')} size="small">Edit</Button>
                        </CardActions>
                    </Card>
                </div>
            </>
        );
    }
}

const stateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(stateToProps)(MovieDetails));