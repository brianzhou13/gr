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

  /*
    @fn-name: getResults
    @input: closest store data from API 
    @output: n/a
    @fn: updates the state with data regarding the closest store, as well as
         updating the `meters` data that'll be funneled down to the Footer.
  */
  getResults(results) {
    // error-handling 
    if(results === `response didn't pass test`) {
      alert(`there was an error with your input!`);
      
      // keep the view at search
      this.setState({
        search: true
      });

    } else {
      this.setState({
        results: results,
        meters: this.state.meters + results.Distance,
        search: false
      });
    }
  }

  /*
    @fn-name: setSearch
    @input: boolean
    @output: n/a
    @fn: decides if the search view or the results view should be displayed
  */
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