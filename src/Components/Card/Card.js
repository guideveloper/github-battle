import React, { Component } from 'react';

// React component for form inputs
class CardInput extends Component {
  render() {
    return(
        <input className="card__input" name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
    )
  }
}

// React component for form button
class CardBtn extends Component {
  render() {
    return(
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
    )
  }
}

// React component for the front side of the card
class CardFront extends Component {
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
class CardBack extends Component {
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
class Card extends Component {
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