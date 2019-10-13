import React from 'react';
import { Link } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { Grid, Fab, GridList, GridListTile, GridListTileBar, makeStyles } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  movieTile: {
    cursor: 'pointer',
    '& img': {
      transition: `filter 0.2s ${theme.transitions.easing.easeOut}`,
    },
    '&:hover img, &:focus img': {
      filter: 'blur(2px) brightness(65%)',
      transition: `filter 0.3s ${theme.transitions.easing.easeIn}`,
    },
  },
  loadMore: {
    backgroundColor: theme.color,
    '& .MuiGridListTile-tile': {
      display: 'flex',
    },
  },
  loadMoreIcon: {},
}));

export const MovieList = ({ movies, isPaginated = false, onLoadNext = () => {} }) => {
  const classes = useStyles();
  return (
    <GridList cols={4} cellHeight={500} spacing={4}>
      {uniqBy(movies, 'imdbID').map((m) => {
        const movieTitle = `${m.Title} (${m.Year})`;
        return (
          <GridListTile
            to={`/${m.imdbID}`}
            key={m.imdbID}
            component={Link}
            className={classes.movieTile}
            title={movieTitle}
          >
            <img
              src={m.Poster !== 'N/A' ? m.Poster : `https://via.placeholder.com/300x456.png?text=${m.Title}`}
              alt={movieTitle}
            />
            <GridListTileBar title={movieTitle} titlePosition="top" />
          </GridListTile>
        );
      })}
      {isPaginated && (
        <GridListTile className={classes.loadMore} key="loadMore" onClick={onLoadNext}>
          <Grid container item direction="column" justify="center" alignContent="center" alignItems="center">
            <Fab variant="extended">
              <MoreHorizIcon />
              Load More
            </Fab>
          </Grid>
        </GridListTile>
      )}
    </GridList>
  );
};
