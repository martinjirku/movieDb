import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getMovie } from '../actions';

export const MovieDetailPage = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movieDetail.movie);
  const isLoading = useSelector((state) => state.movieDetail.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading && movie.imdbID !== id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id, isLoading, movie.imdbID]);
  return (
    <Grid>
      <h1>Movie detail: {id}</h1>
    </Grid>
  );
};
