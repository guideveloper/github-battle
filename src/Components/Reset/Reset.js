import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Reset.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Reset;