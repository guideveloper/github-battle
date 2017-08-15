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

export default Player;