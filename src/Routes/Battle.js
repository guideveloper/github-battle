import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const API = 'https://api.github.com/users';

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
        <div className={classnames('card__body', this.props.champClass)}>

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
              <img src={this.props.playerAvatar} alt="Profile Pic"/>
              { this.props.playerUsername ? <p className="card__label">{this.props.playerUsername}</p> : null }
              { this.props.playerName ? <p className="card__name">{this.props.playerName}</p> : null }
              <div className="card__data">
                { this.props.playerRepos ? <p className="card__label"><span>{this.props.playerRepos}</span><span className="card__data__name">Repos</span></p> : null }
                { this.props.playerFollowers ? <p className="card__label"><span>{this.props.playerFollowers}</span><span className="card__data__name">Followers</span></p> : null }
                { this.props.playerFollowing ? <p className="card__label"><span>{this.props.playerFollowing}</span><span className="card__data__name">Following</span></p> : null }
              </div>
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
      fighting: '',
      reset: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.sendClass = this.sendClass.bind(this);
  }

  handleClick() {
    this.setState({
      fighting: 'fighting',
      reset: 'reset'
    })
  }

  sendClass(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.fighting,
      this.state.reset
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

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reset: ''
    }

    this.handleReset = this.handleReset.bind(this);
    this.refreshAll = this.refreshAll.bind(this);
  }

  handleReset() {
    this.setState({
      reset: 'reset',
    })
  }

  refreshAll(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.reset
    )
  }

  render() {
    return(
      <form formAction="" onSubmit={this.refreshAll}>
        <button
          className="button button--fight"
          type="submit"
          onClick={this.handleReset}>
          Play Again!
        </button>
      </form>
    )
  }
}

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneUsername: '',
      playerOneName: '',
      playerOneAvatar: '',
      playerOneLocation: '',
      playerOneRepos: '',
      playerOneFollowers: '',
      playerOneFollowing: '',
      playerOne: '',
      playerTwoUsername: '',
      playerTwoName: '',
      playerTwoAvatar: '',
      playerTwoLocation: '',
      playerTwoRepos: '',
      playerTwoFollowers: '',
      playerTwoFollowing: '',
      playerTwo: '',
      fighting: '',
      playAgain: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFight = this.handleFight.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    let url = `${API}/${username}`;

    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState( function() {
          var newState = {};
          newState[id + 'Username'] = data.login;
          newState[id + 'Name'] = data.name;
          newState[id + 'Avatar'] = data.avatar_url;
          newState[id + 'Location'] = data.location;
          newState[id + 'Repos'] = data.public_repos;
          newState[id + 'Followers'] = data.followers;
          newState[id + 'Following'] = data.following;
          return newState;
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  handleFight(fighting, reset) {
    var playerOneRepos = this.state.playerOneRepos;
    var playerTwoRepos = this.state.playerTwoRepos;

    if(playerOneRepos > playerTwoRepos) {
      this.setState({
        fighting: fighting,
        playerOne: 'winner',
        playerTwo: 'loser',
        playAgain: reset
      })
    }else {
      this.setState({
        fighting: fighting,
        playerOne: 'loser',
        playerTwo: 'winner',
        playAgain: reset
      })
    }
  }
  
  handleReset() {
    this.setState({
      playerOneUsername: '',
      playerOneName: '',
      playerOneAvatar: '',
      playerOneLocation: '',
      playerOneRepos: '',
      playerOneFollowers: '',
      playerOneFollowing: '',
      playerOne: '',
      playerTwoUsername: '',
      playerTwoName: '',
      playerTwoAvatar: '',
      playerTwoLocation: '',
      playerTwoRepos: '',
      playerTwoFollowers: '',
      playerTwoFollowing: '',
      playerTwo: '',
      fighting: '',
      playAgain: ''
    })
  }
  
  render() {
    var playerOneUsername = this.state.playerOneUsername;
    var playerOneName = this.state.playerOneName;
    var playerOneAvatar = this.state.playerOneAvatar;
    var playerOneLocation = this.state.playerOneLocation;
    var playerOneRepos = this.state.playerOneRepos;
    var playerOneFollowers = this.state.playerOneFollowers;
    var playerOneFollowing = this.state.playerOneFollowing;
    var playerOne = this.state.playerOne;
    var playerTwoUsername = this.state.playerTwoUsername;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoAvatar = this.state.playerTwoAvatar;
    var playerTwoLocation = this.state.playerTwoLocation;
    var playerTwoRepos = this.state.playerTwoRepos;
    var playerTwoFollowers = this.state.playerTwoFollowers;
    var playerTwoFollowing = this.state.playerTwoFollowing;
    var playerTwo = this.state.playerTwo;

    return (
      <main className="content">
        <h1 className="page-title">Choose an opponent!</h1>
        <p className="page-intro">Select two opponents below by entering their github username and clicking Select!</p>
        <p className="page-intro">We will then return two opponents to battle.</p>
        <div className={classnames('card__row', this.state.fighting)} >
          <Player
            id="playerOne"
            label="Player One"
            playerUsername={playerOneUsername ? playerOneUsername : "Choose Player One"}
            playerName={playerOneName ? playerOneName : ""}
            playerAvatar={playerOneAvatar ? playerOneAvatar : "/assets/blank-profile.png"}
            playerLocation={playerOneLocation ? playerOneLocation : ""}
            playerRepos={playerOneRepos ? playerOneRepos : ""}
            playerFollowers={playerOneFollowers ? playerOneFollowers : ""}
            playerFollowing={playerOneFollowing ? playerOneFollowing : ""}
            readyClass={playerOneName ? "card--ready" : ""}
            champClass={playerOne ? playerOne : ""}
            onSubmit={this.handleSubmit}
          />
          <Player
            id="playerTwo"
            label="Player Two"
            playerUsername={playerTwoUsername ? playerTwoUsername : "Choose Player One"}
            playerName={playerTwoName ? playerTwoName : ""}
            playerAvatar={playerTwoAvatar ? playerTwoAvatar : "/assets/blank-profile.png"}
            playerLocation={playerTwoLocation ? playerTwoLocation : ""}
            playerRepos={playerTwoRepos ? playerTwoRepos : ""}
            playerFollowers={playerTwoFollowers ? playerTwoFollowers : ""}
            playerFollowing={playerTwoFollowing ? playerTwoFollowing : ""}
            readyClass={playerTwoName ? "card--ready" : ""}
            champClass={playerTwo ? playerTwo : ""}
            onSubmit={this.handleSubmit}
          />
        </div>

        {!this.state.playAgain &&
        <Fight onSubmit={this.handleFight}/>
        }

        {this.state.playAgain &&
          <Reset onSubmit={this.handleReset}/>
        }
      </main>
    );
  }
}

export default Battle;