import React, { Component } from 'react';
import { getData } from '../api';

class Battle extends Component {
  constructor(props) {
      super(props);

      this.state = {
          playerOne: [],
          playerTwo: []
      }
  }

  getPlayerOne() {
    getData((data) => {
        this.setState({
            playerOne: JSON.parse(data),
        });
        console.log(this.state.playerOne);
    });
  }

  getPlayerTwo() {
    getData((data) => {
        this.setState({
            playerTwo: JSON.parse(data),
        });
        console.log(this.state.playerOne);
    });
  }
  
  render() {
      return (
          <main className="content">
              <h1 className="page-title">Choose an opponent!</h1>
              <p className="page-intro">Select two opponents below by entering their twitter handles and clicking Ready!</p>
              <p className="page-intro">We will then return two opponents to battle.</p>
              <div className="card__row">
                  <Card heading="Player One" />
                  <Card heading="Player Two" />
              </div>

          </main>
      );
  }
}

// React component for form inputs
class CardInput extends React.Component {
  render() {
    return(
        <input className="card__input" name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
    )
  }
}

// React component for form button
class CardBtn extends React.Component {
  render() {
    return(
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
    )
  }
}

// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return(
      <div className="card__side card__side--front">
        <div className="card__profile">
          <img src="/assets/blank-profile.png" alt="Profile Pic"/>
          <p className="card__heading">Choose {this.props.heading}</p>
        </div>
      </div>
    )
  }
}

// React component for the back side of the card
class CardBack extends React.Component {
  render() {
    return(
      <div className="card__side card__side--back">
        <p className="card__heading">{this.props.heading}</p>
          
        <form formAction="" className="card__form">
            <CardInput name="twitterUsername" id="twitterUsername" type="text" placeholder="twitter username" />
            <CardBtn className="button button--ready" type="submit" value="Select!" />
        </form>
      </div>
    )
  }
}

// React component for the card (main component)
class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <div className="card__body">
          <CardBack heading={this.props.heading}/>
          <CardFront heading={this.props.heading}/>
        </div>
      </div>
    )
  }
}

export default Battle;
