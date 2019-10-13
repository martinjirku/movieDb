import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Container, Divider, IconButton, makeStyles } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { getMovie } from '../actions';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(2),
    },
    poster: {
      maxWidth: '100%',
    },
    divider: {
      marginTop: '10px',
      marginBottom: '30px',
    },
    favoriteIcon: {
      cursor: 'pointer',
    },
  };
});

export const MovieDetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const m = useSelector((state) => state.movieDetail.movie);
  const isLoading = useSelector((state) => state.movieDetail.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && m.imdbID !== id) {
      dispatch(getMovie(id));
    }
  }, [dispatch, id, isLoading, m.imdbID]);
  const title = m.Title + (m.Year ? ` (${m.Year})` : '') || '';
  return (
    <Container className={classes.container}>
      <Grid container direction="column">
        <Grid container direction="row" spacing={3}>
          <Grid item xs={4}>
            <img
              className={classes.poster}
              src={m.Poster !== 'N/A' ? m.Poster : `https://via.placeholder.com/300x456.png?text=${m.Title}`}
              alt={title}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {title} <StarBorderOutlinedIcon className={classes.favoriteIcon} />
            </Typography>
            <Typography variant="subtitle1">
              {m.Runtime} | {m.Genre} | {m.Released} | {m.Country}
            </Typography>
            <Divider className={classes.divider} />
            <Typography paragraph gutterBottom>
              {m.Plot}
            </Typography>
            <Typography variant="subtitle2">Director:</Typography>
            <Typography gutterBottom>{m.Director}</Typography>
            <Typography variant="subtitle2">Production:</Typography>
            <Typography gutterBottom>{m.Production}</Typography>
            <Typography variant="subtitle2">Writer:</Typography>
            <Typography gutterBottom>{m.Writer}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
