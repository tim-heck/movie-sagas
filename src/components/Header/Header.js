import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <header>
                <h1>{this.props.textToShow}</h1>
            </header>
        );
    }
}

export default Header;