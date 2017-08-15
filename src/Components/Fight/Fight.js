import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Fight.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Fight;