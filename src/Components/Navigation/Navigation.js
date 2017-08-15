import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <ul className="navigation">
                <li className="navigation__item"><Link to="./" className="navigation__link">Home</Link></li>
                <li className="navigation__item"><Link to="./profile" className="navigation__link">My Profile</Link></li>
                <li className="navigation__item"><Link to="./ranking" className="navigation__link last">Ranking</Link></li>
                <li className="navigation__item"><Link to="./battle" className="navigation__link">Battle!</Link></li>
            </ul>
        );
    }
}

export default Navigation;