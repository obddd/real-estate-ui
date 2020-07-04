import React from 'react';
import './CollectionProperty.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropertyCard from '../PropertyCard/PropertyCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CollectionProperty = () => {
  const classes = useStyles();
  return (
    <div className="property-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}><PropertyCard/></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CollectionProperty;
