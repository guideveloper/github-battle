import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <ul className="navigation">
                <li className="navigation__item"><a href="./" className="navigation__link">Home</a></li>
                <li className="navigation__item"><a href="./profile" className="navigation__link">My Profile</a></li>
                <li className="navigation__item"><a href="./ranking" className="navigation__link last">Ranking</a></li>
                <li className="navigation__item"><a href="./battle" className="navigation__link">Battle!</a></li>
            </ul>
        );
    }
}

export default Navigation;