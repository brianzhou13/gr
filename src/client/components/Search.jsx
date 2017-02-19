import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'city'
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText(el) {
    this.setState({
      value: el.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="form-inline row">
          <label 
            for="example-text-input" 
            className="col-2 col-form-label">Text</label>
          <div className="col-10">
            <input 
              className="form-control" 
              type="text" 
              value={this.state.value}
              onChange={this.updateText}
              id="example-text-input"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;