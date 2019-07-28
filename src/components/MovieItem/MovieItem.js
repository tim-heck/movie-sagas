import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    card: {
        minWidth: 400,
        maxWidth: 400,
        display: 'inline-block',
        margin: 10,
        textAlign: 'left',
        boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.2)',
        transition: '.3s',
        '&:hover':{
            boxShadow: '0px 10px 12px 0px rgba(0,0,0,0.4)',
            transform: 'translateY(-6px)',
        }
    },
    title: {
        height: 70,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    description: {
        paddingLeft: 8
    },
});

class MovieItem extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader className={classes.title}
                    title={this.props.movie.title}
                />
                <CardMedia onClick={this.props.goToDetails}
                    className={classes.media}
                    image={this.props.movie.poster}
                />
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography className={classes.description} component="h3">Description</Typography>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.movie.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(MovieItem);