import React from 'react';
import './SearchBar.css';
import Divider from '@material-ui/core/Divider';

const SearchBar = () => {
  return (
    <form>
      <div className="searchbar-container">
        <div className="form-field">
          <div className="label">
            <label>Search and Find</label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Title, keyword, address, zip or property id ..."
            />
          </div>
        </div>

        <Divider orientation="vertical"/>

        <div className="form-field">
          <div className="label">
            <label>Location</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Singapore, Singapore" />
          </div>
        </div>

        <Divider orientation="vertical"/>

        <div className="form-field">
          <div className="label">
            <label>Type</label>
          </div>
          <div className="input">
            <select>
              <option value="">Residence</option>
              <option value="">Offices</option>
              <option value="">Commercial</option>
            </select>
          </div>
        </div>
        <button className="search-btn"><i class="fa fa-search"></i></button>
      </div>
    </form>
  );
};

export default SearchBar;
