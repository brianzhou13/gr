import React from 'react';

const SearchButton = ({search}) => {
  return (
    <div>
      <button 
        type='button' 
        className='btn btn-primary btn-lg cursor'
        onClick={search}>
          Search Cities
      </button>
    </div>
  )
}

export default SearchButton;