import React from 'react';
import './CollectionDeals.css';
import PropertyDealCard from '../PropertyDealCard/PropertyDealCard';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap"
   
  },
  paper: {
    textAlign: 'center',
    width: '90%'
  },
}));

const CollectionDeals = () => {
  const classes = useStyles();
  return (
    <div className="collection-container">
      <div className="collection-title">
        <span>Deals Closing</span>
      </div>
      <div className="dash-2">
        <span>&#11834;</span>
      </div>

      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PropertyDealCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PropertyDealCard />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PropertyDealCard />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CollectionDeals;
