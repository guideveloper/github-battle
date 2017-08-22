import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Player from '../Components/Player/Player';
import Fight from '../Components/Fight/Fight';
import Reset from '../Components/Reset/Reset';

const API = 'https://api.github.com/users';

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
    const { playerOneRepos, playerTwoRepos } = this.state;
    
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
    const { playerOneUsername, playerOneName, playerOneAvatar, playerOneLocation, playerOneRepos, playerOneFollowers, playerOneFollowing, playerOne, playerTwoUsername, playerTwoName, playerTwoAvatar, playerTwoLocation, playerTwoRepos, playerTwoFollowers, playerTwoFollowing, playerTwo } = this.state;
    const blankProfile = '//www.guideveloper.co.uk/react/github-battle/assets/blank-profile.png';

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
            playerAvatar={playerOneAvatar ? playerOneAvatar : blankProfile}
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
            playerUsername={playerTwoUsername ? playerTwoUsername : "Choose Player Two"}
            playerName={playerTwoName ? playerTwoName : ""}
            playerAvatar={playerTwoAvatar ? playerTwoAvatar : blankProfile}
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