import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Container, Divider, makeStyles } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { getMovie, addFavoriteMovie, removeFavoriteMovie } from '../actions';
import { DetailedInformation } from '../components/detailed-information';
import { isEmptyInformation } from '../utils';
import { appTitle } from '../constants';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(2),
    },
    poster: {
      width: '100%',
    },
    favoriteIcon: {
      cursor: 'pointer',
    },
  };
});

const setTitle = (movieName) => {
  document.title = `${appTitle} - ${movieName}`;
};

export const MovieDetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const m = useSelector((state) => state.movieDetail.movie);
  const isLoading = useSelector((state) => state.movieDetail.loading);
  const isFavorite = useSelector((state) => {
    return !!state.favoriteMovies.movies.find((i) => i.imdbID === id);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(m.Title);
    if (!isLoading && m.imdbID !== id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id, isLoading, m.Title, m.imdbID]);
  const title = (m.Title || '') + (m.Year ? ` (${m.Year})` : '');
  const FavoriteComponent = isFavorite ? StarOutlinedIcon : StarBorderOutlinedIcon;
  return (
    <Container className={classes.container}>
      <Grid container direction="column" spacing={3}>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={4}>
            <img
              className={classes.poster}
              src={!isEmptyInformation(m.Poste) ? m.Poster : `https://via.placeholder.com/300x456.png?text=${m.Title}`}
              alt={title}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {title}{' '}
              {
                <FavoriteComponent
                  className={classes.favoriteIcon}
                  onClick={() => dispatch((isFavorite ? removeFavoriteMovie : addFavoriteMovie)(m))}
                />
              }
            </Typography>
            <Typography variant="subtitle1">
              {m.Runtime} | {m.Genre} | {m.Released} | {m.Country}
            </Typography>
            <Divider />
            <Typography variant="subtitle1" gutterBottom>
              {/* TODO handle empty values */}
              {m.Type} | Rating {m.imdbRating}/10 ({m.imdbVotes} votes) | {m.Rated}{' '}
              {isEmptyInformation(m.Website) ||
                ` | ${(
                  <a href={m.Website} rel="noopener noreferrer" target="_blank">
                    Website
                  </a>
                )}`}
            </Typography>
            <Typography paragraph gutterBottom>
              {m.Plot}
            </Typography>
            <DetailedInformation title="Director" value={m.Director} />
            <DetailedInformation title="Production" value={m.Production} />
            <DetailedInformation title="Writer" value={m.Writer} />
            <DetailedInformation title="Director" value={m.Director} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={6}>
          <DetailedInformation title="Actors" value={m.Actors} />
          <DetailedInformation title="Awards" value={m.Awards} />
          <DetailedInformation title="Earns" value={m.BoxOffice} />
          <DetailedInformation title="DVD release" value={m.DVD} />
          <DetailedInformation title="Language" value={m.Language} />
        </Grid>
        {m.Ratings && m.Ratings.length > 0 && (
          <Grid item xs={6}>
            <Typography variant="h6">Ratings</Typography>
            {m.Ratings.map((r) => (
              <Typography key={r.Source}>
                {r.Source}: <em>{r.Value}</em>
              </Typography>
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
