import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import InputForm from './searchForms/InputForm';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      street: 'street',
      city: 'city',
      zip: 'zipcode',
      state: 'state',

    };

    this.updateStreet = this.update.bind(this, 'street');
    this.updateCity = this.update.bind(this, 'city');
    this.updateState = this.update.bind(this, 'state');
    this.updateZip = this.update.bind(this, 'zip');
  }

  /*
    @fn-name: updateStreet
    @input: details for input element on DOM
    @output: n/a
    @fn: takes input entered by user, then updates local `street` state
  */
  update(key, el) {
    this.setState({
      [key]: el.target.value
    });
  }

  render() {
    return (
      <div>
        <InputStreet
          value={this.state.street}
          update={this.updateStreet}
          dataType={`Street`}
          />
        <InputStreet
          value={this.state.city}
          update={this.updateCity}
          dataType={`City`}
          />
        <InputStreet
          value={this.state.state}
          update={this.updateState}
          dataType={`State`}
          />
        <InputStreet
          value={this.state.zip}
          update={this.updateZip}
          dataType={`ZipCode`}
          />
      </div>
    )
  }
}

export default Search;