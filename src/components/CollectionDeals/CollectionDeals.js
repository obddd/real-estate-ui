import React from 'react';
import './CollectionDeals.css';
import PropertyCard from '../PropertyCard/PropertyCard';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '50px'
  },
  paper: {
    textAlign: 'center'
  },
}));

const CollectionDeals = () => {
  const classes = useStyles();
  return (
    <div className="collection-container">
      <div className="collection-title">
        <span>Deals Closing</span>
      </div>
      <div className="collection-title">
        <span>___</span>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CollectionDeals;
