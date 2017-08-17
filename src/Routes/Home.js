import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="page-title">Battle your opponents and see who has the most repos.</h1>
                <p className="page-intro">Search for friend or foe using our github battle engine and then fight to see who wins.</p>
                <p className="page-intro">Winners are those with the most repos.</p>
                <Link to="/battle" className="button button--choose">Choose an opponent</Link>
            </main>
        );
    }
}

export default Home;