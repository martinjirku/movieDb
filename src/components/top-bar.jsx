import React from 'react';
import { AppBar, Toolbar, IconButton, Fab, Typography, makeStyles } from '@material-ui/core';
import { Apps, Star } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { appTitle } from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" component={Link} to="/" color="inherit">
          <Apps />
        </IconButton>
        <Typography className={classes.title} variant="h5">
          {appTitle}
        </Typography>
        <Fab variant="extended" component={Link} to="/favorite-movies" color="secondary">
          <Star className={classes.menuButton} />
          Favorite movies
        </Fab>
      </Toolbar>
    </AppBar>
  );
};
