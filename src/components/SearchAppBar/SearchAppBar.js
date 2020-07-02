import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './SearchAppBar.css';

const SearchAppBar = () => {
  return (
    <div className="header-container">
      <div className="title">
        <span>Add a Property</span>
      </div>
      <div className="header-title">
        <span>Client Login</span>
      </div>
      <div className="header-icon">
        <SearchIcon />
      </div>
      <div className="header-icon">
        <MenuIcon />
      </div>
    </div>
  );
};

export default SearchAppBar;
