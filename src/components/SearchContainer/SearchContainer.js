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
        <span>for the right house for you !</span>
      </div>
      <div className="search-title">
        <span>___</span>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchContainer;
