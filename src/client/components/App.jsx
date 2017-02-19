import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Body from './Body';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;