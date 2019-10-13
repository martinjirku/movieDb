import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Container, makeStyles } from '@material-ui/core';
import { MovieList } from '../components/movie-list';
import { MovieListMessage } from '../components/movie-list-message';
import { appTitle } from '../constants';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(2),
      '& > *': {
        paddingBottom: theme.spacing(2),
      },
    },
  };
});

const setTitle = () => {
  document.title = `${appTitle} - Favorite Movies`;
};

export const FavoriteMoviesPage = () => {
  const classes = useStyles();
  useEffect(() => {
    setTitle();
  });
  const { movies = [] } = useSelector((state) => state.favoriteMovies);
  return (
    <Container className={classes.container}>
      <Grid container>
        <Typography variant="h4">Favorite Movies</Typography>
      </Grid>
      {movies.length > 0 ? (
        <MovieList movies={movies} isPaginated={false} />
      ) : (
        <MovieListMessage value="You do not have any favorite movies. You can add it by clicking on the start next to movie title" />
      )}
    </Container>
  );
};
