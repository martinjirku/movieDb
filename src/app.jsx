import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { TopBar } from './components/top-bar';
import { MoviesPage } from './pages/movies-page';
import { FavoriteMoviesPage } from './pages/favorite-movies-page';
import { MovieDetailPage } from './pages/movie-detail-page';

export function App() {
  return (
    <Router>
      <Grid>
        <TopBar />
        <Grid>
          <Switch>
            <Route path="/" exact>
              <MoviesPage />
            </Route>
            <Route path="/favorite-movies">
              <FavoriteMoviesPage />
            </Route>
            <Route path="/:id">
              <MovieDetailPage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}
