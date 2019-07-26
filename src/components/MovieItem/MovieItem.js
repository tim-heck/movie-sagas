import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <li>
                <img onClick={this.props.goToDetails} src={this.props.movie.poster} alt={this.props.movie.title} />
                <div>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </div>
            </li>
        );
    }
}

export default MovieItem;