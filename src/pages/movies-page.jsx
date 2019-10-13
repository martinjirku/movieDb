import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container, CircularProgress, makeStyles } from '@material-ui/core';
import { SearchBox } from '../components/search-box';
import { MovieList } from '../components/movie-list';
import { MovieListMessage } from '../components/movie-list-message';
import { appTitle, errorMessage } from '../constants';
import { getMovies, loadNextPage } from '../actions';

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

const setTitle = (searchTerm) => {
  const searchTitleText = searchTerm.length > 0 ? ` - ${searchTerm}` : '';
  document.title = `${appTitle}${searchTitleText}`;
};

const getMessage = (error, resultLength, isLoading) => {
  if (isLoading) return;
  if (error === 'Too many results.') {
    return <MovieListMessage value="Too many results. Try to refine your search." />;
  }
  if (error === 'Movie not found!') {
    return <MovieListMessage value="No movies found. Try to change your search." />;
  }
  if (error === errorMessage) {
    return <MovieListMessage value={`${errorMessage} Try again later.`} />;
  }
  if (resultLength === 0) {
    return <MovieListMessage value="No Search Results yet." />;
  }
};

export const MoviesPage = () => {
  const classes = useStyles();
  const searchTermProps = useSelector((state) => state.movies.searchTerm);
  const totalResults = useSelector((state) => state.movies.totalResults);
  const error = useSelector((state) => state.movies.error);
  const isLoading = useSelector((state) => state.movies.loading);
  const [searchTerm, setSearchTerm] = useState(searchTermProps);
  useEffect(() => {
    setTitle(searchTerm);
  });
  const { movies = [] } = useSelector((state) => state.movies); //, loading, totalResults
  const dispatch = useDispatch();

  let resultSection = getMessage(error, movies.length, isLoading);

  return (
    <Container className={classes.container}>
      <Grid container>
        <SearchBox
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getMovies(searchTerm));
          }}
        />
      </Grid>
      {movies.length > 0 && (
        <MovieList
          movies={movies}
          isPaginated={totalResults > movies.length}
          onLoadNext={() => {
            dispatch(loadNextPage());
          }}
        />
      )}
      {isLoading && <CircularProgress />}
      {resultSection}
    </Container>
  );
};
