import React from 'react';
import './SearchBar.css';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as SearchIcon } from '../../assets/search-2.svg';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <form>
      <Paper className={classes.paper}>
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

          <Divider orientation="vertical" />

          <div className="form-field">
            <div className="label">
              <label>Location</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Singapore, Singapore" />
            </div>
          </div>

          <Divider orientation="vertical" />

          <div className="form-field">
            <div className="label">
              <label>Type</label>
            </div>
            <div className="input">
              <select>
                <option selected>Select</option>
              </select>
            </div>
          </div>
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>
      </Paper>
    </form>
  );
};

export default SearchBar;
