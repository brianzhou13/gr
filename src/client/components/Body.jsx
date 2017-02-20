import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { render } from 'react-dom';
import Results from './Results';
import Search from './Search';
import Footer from './Footer';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: '',
      search: true,
      meters: 0,
    };

    this.getResults = this.getResults.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  getResults(results) {
    this.setState({
      results: results,
    })

    this.setState({
      meters: this.state.meters + results.Distance
    })
  }

  setSearch(val) {
    this.setState({
      search: val
    });
  }


  render() {

    return (
      <div>
          {
            this.state.search ? 
            <ReactCSSTransitionGroup
              transitionName='example'
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={true}
              transitionLeave={true}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Search 
                getResults={this.getResults}
                setSearch={this.setSearch}
              />
            </ReactCSSTransitionGroup> :
            <ReactCSSTransitionGroup
              transitionName='example'
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={true}
              transitionLeave={true}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Results
                results={this.state.results}
                setSearch={this.setSearch}
              />
            </ReactCSSTransitionGroup>
          }
        <div>
          <Footer 
            meters={this.state.meters}
          />
        </div>
      </div>
    )
  }
}

export default Body;