import React from 'react';
import './WorldContainer.css';
import PropertyDealCard from '../../components/PropertyDealCard/PropertyDealCard';

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
  grid:{
      marginBottom: '50px'
  }
}));

const WorldContainer = () => {
    const classes = useStyles();
    return (
      <div className="world-container">
        <div className="world-title">
          <span>Invest Around The World</span>
        </div>
        <div className="world-title">
          <span>___</span>
        </div>

        <div className={classes.root}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
        </Grid>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
        </Grid>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><PropertyDealCard/></Paper>
          </Grid>
        </Grid>
      </div>

      </div>
    );
};

export default WorldContainer;