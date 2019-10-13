import { combineReducers } from 'redux';
import { searchMoviesReducer } from './movies-reducer';
import { movieDetailReducer } from './movie-detail-reducer';
import { favoriteMoviesReducer } from './favorite-movies-reducer';

export default combineReducers({
  movies: searchMoviesReducer,
  movieDetail: movieDetailReducer,
  favoriteMovies: favoriteMoviesReducer,
});
