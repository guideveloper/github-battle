import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="page-title">Battle your opponents and see whose the most popular.</h1>
                <p className="page-intro">Search for friend or foe using our twitter battle engine and then fight to see who wins.</p>
                <p className="page-intro">Winners are those with the most followers.</p>
                <a href="./battle" className="button button--fight">Choose an opponent</a>
            </main>
        );
    }
}

export default Home;
