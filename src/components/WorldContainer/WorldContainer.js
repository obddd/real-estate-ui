import React from 'react';
import './WorldContainer.css';
import PropertyDealCard from '../../components/PropertyDealCard/PropertyDealCard';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    flexWrap: "wrap"
  },
  paper: {
    textAlign: 'center',
    width: '98.5%'
  },
  grid: {
    marginBottom: '50px',
  },
}));

const WorldContainer = () => {
  const classes = useStyles();
  return (
    <div className="world-container">
      <div className="world-title">
        <span>Invest Around The World</span>
      </div>
      <div className="dash-2">
        <span>&#11834;</span>
      </div>

      <div className={classes.root}>
        <Grid className={classes.grid} container spacing={5}>
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
        <Grid className={classes.grid} container spacing={5}>
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
        <Grid className={classes.grid} container spacing={5}>
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

export default WorldContainer;
