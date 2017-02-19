import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Results from './Results';
import Search from './Search';

class Body extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    )
  }
}

export default Body;