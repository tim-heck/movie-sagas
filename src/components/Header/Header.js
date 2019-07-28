import React, { Component } from 'react';
import './Header.css'

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