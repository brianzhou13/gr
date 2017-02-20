import React from 'react';

const SearchButton = ({search}) => {
  return (
    <div>
      <button 
        type='button' 
        className='btn btn-primary btn-lg cursor 
        header-sub search-btn-btn apple-font'
        onClick={search}>
          Find Stores!
      </button>
    </div>
  )
}

export default SearchButton;