import React from 'react';

const Results = ({results, setSearch}) => {
  
  return (
    <div className='card-results'>
      <div className='card'>
        <div className='card-block card-head'>
          <h4 className='card-title apple-font'>{results[`Store Location`]}</h4>
          <span className='card-text'>located {Math.round(results[`Distance`])} kilometers away</span>
        </div>
        <ul className='list-group list-group-flush apple-font'>
          <li className='list-group-item'>
            <strong>Address:</strong> {results[`Address`]}
          </li>
          <li className='list-group-item'>
            <strong>City:</strong> {results[`City`]}
          </li>
          <li className='list-group-item'>
            <strong>Longitude:</strong> {results[`Address`]}
          </li>
          <li className='list-group-item'>
            <strong>Latitude:</strong> {results[`Address`]}
          </li>
        </ul>
        <div 
          className='card-footer card-bot cursor search-btn-btn search-btn-transition'
          onClick={() => setSearch(true)}>
          Return to Search
        </div>
      </div>
    </div>
  );
};

export default Results;