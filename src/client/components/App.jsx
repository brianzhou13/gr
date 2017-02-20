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
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <Header/>
          <Body/>
        </div>
        <div className='col-md-4'>
        </div>
      </div>
    );
  }
}

export default App;