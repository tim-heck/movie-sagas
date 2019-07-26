import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

    render() {
        return (
            <li>
                <img src={this.props.movie.poster} alt={this.props.movie.title} />
                <div>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.description}</p>
                </div>
                    
            </li>
        );
    }
}

export default MovieItem;