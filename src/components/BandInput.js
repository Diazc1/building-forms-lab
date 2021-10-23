import React, { Component } from 'react';


///write the BandInput component as a child of BandsContainer

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  //this component should have a form with a text input and submit button
  //we would like to update this component's state each time the user types a new character in the input, stored as this.state.name
  //we will only update the Redux store's state when the user hits the submit button
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;