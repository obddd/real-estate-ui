import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="form-group">
        <div className="form-field">
          <div className="label">
            <label>Search and Find</label>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Title, keyword, address, zip or property id"
            />
          </div>
        </div>
        <div className="form-field">
          <div className="label">
            <label>Location</label>
          </div>
          <div className="input">
            <input type="text" placeholder="Singapore, Singapore" />
          </div>
        </div>
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
        <button>Submit</button>
      </div>
    </div>
  );
};

export default SearchBar;
