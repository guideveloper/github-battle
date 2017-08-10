import React, { Component } from 'react';

import Navigation from '../Components/Navigation';

class Header extends Component {
    render() {
        return (
            <header>
                <img src="./assets/logo.png" className="logo" alt="Twitter Battle"/>
                <p className="strapline">Pick an opponent and FIGHT!</p>
                <Navigation />
            </header>
        );
    }
}

export default Header;
