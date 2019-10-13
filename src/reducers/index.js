import { combineReducers } from 'redux';
import { searchMoviesReducer } from './movies-reducer';
import { movieDetailReducer } from './movie-detail-reducer';

export default combineReducers({ movies: searchMoviesReducer, movieDetail: movieDetailReducer });
