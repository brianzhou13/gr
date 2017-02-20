import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import InputForm from './searchForms/InputForm';
import SearchButton from './searchForms/SearchButton';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      street: '1770 Union St',
      city: 'San Francisco',
      zip: '94123',
      state: 'CA',

    };

    this.updateStreet = this.update.bind(this, 'street');
    this.updateCity = this.update.bind(this, 'city');
    this.updateState = this.update.bind(this, 'state');
    this.updateZip = this.update.bind(this, 'zip');
    this.geocodeLocation = this.geocodeLocation.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
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

  /*
    @fn-name: checkEmpty
    @input: n/a
    @output: boolean
    @fn: checks if any string items are empty
  */
  checkEmpty() {
    return this.street && this.city && this.zip && this.state;
  }

  /*
    @fn-name: geocodeLocation
    @input: n/a
    @output: close-by locations from api
    @fn: sends current values in state/city/zip to be encoded
  */
  geocodeLocation() {
    if(!this.checkEmpty()){
      // prompt an alert
      // throw `empty string values`;
    }

    const {street, city, state, zip} = this.state;

    // change state
    this.props.setSearch(false);

    axios.get(`/api/${street}/${city}/${state}/${zip}`)
      .then((resp) => {
        // maybe can set state here
        console.log('resp received is: ', resp);
        this.props.getResults(resp.data);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  }

  render() {
    return (
      <div>
        <div>
          <InputForm
            value={this.state.street}
            update={this.updateStreet}
            dataType={`Street`}
            />
          <InputForm
            value={this.state.city}
            update={this.updateCity}
            dataType={`City`}
            />
          <InputForm
            value={this.state.state}
            update={this.updateState}
            dataType={`State`}
            />
          <InputForm
            value={this.state.zip}
            update={this.updateZip}
            dataType={`ZipCode`}
            />
        </div>
        <div className='center'>
          <SearchButton
            search={this.geocodeLocation}
          />
        </div>
      </div>
    )
  }
}

export default Search;