import React from 'react';
import './SearchContainer.css';
import SearchBar from '../SearchBar/SearchBar';

const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-title">
        <span>Looking...</span>
      </div>
      <div className="search-title">
        <span className='top'>for the right house for you !</span>
      
        <div className='dash'>
          <span>&#11834;</span>
        </div>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchContainer;
