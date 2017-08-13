import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return(
      <div className={classnames('card', this.props.readyClass)}>
        <div className="card__body">

          <div className="card__side card__side--back">
            <form formAction="" className="card__form" onSubmit={this.handleSubmit}>
              <label
                className="card__label"
                htmlFor="username">
                {this.props.label}
              </label>
              <input 
                className="card__input"
                id="username"
                type="text"
                placeholder="github username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button
                className="button button--ready"
                type="submit"
                disabled={!this.state.username}>
                Select!
              </button>
            </form>
          </div>

          <div className="card__side card__side--front">
            <div className="card__profile">
              <img src={this.props.playerImage} alt="Profile Pic"/>
              <p className="card__label">{this.props.playerName}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

Player.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Fight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fighting: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.sendClass = this.sendClass.bind(this);
  }

  handleClick() {
    this.setState({
      fighting: 'fighting',
    })
  }

  sendClass(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.fighting
    )
  }

  render() {
    return(
      <form formAction="" onSubmit={this.sendClass}>
        <button
          className="button button--fight"
          type="submit"
          onClick={this.handleClick}>
          Fight!
        </button>
      </form>
    )
  }
}

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
      fighting: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFight = this.handleFight.bind(this);
  }

  handleSubmit(id, username) {
    this.setState( function() {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';

      return newState;
    });
  }

  handleFight(fighting) {
    this.setState({
      fighting: fighting
    })
  }
  
  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <main className="content">
        <h1 className="page-title">Choose an opponent!</h1>
        <p className="page-intro">Select two opponents below by entering their twitter handles and clicking Ready!</p>
        <p className="page-intro">We will then return two opponents to battle.</p>
        <div className={classnames('card__row', this.state.fighting)} >
          <Player
            id="playerOne"
            label="Player One"
            playerName= {playerOneName ? playerOneName : "Choose Player One"}
            playerImage={playerOneImage ? playerOneImage : "/assets/blank-profile.png"}
            readyClass={playerOneName ? "card--ready" : ""}
            onSubmit={this.handleSubmit}
          />
          <Player
            id="playerTwo"
            label="Player Two"
            playerName= {playerTwoName ? playerTwoName : "Choose Player Two"}
            playerImage={playerTwoImage ? playerTwoImage : "/assets/blank-profile.png"}
            readyClass={playerTwoName ? "card--ready" : ""}
            onSubmit={this.handleSubmit}
          />
        </div>
        {playerTwoImage &&
          <Fight onSubmit={this.handleFight}/>
        }
      </main>
    );
  }
}

export default Battle;