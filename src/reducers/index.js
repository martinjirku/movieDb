import { combineReducers } from 'redux';
import { searchMovies } from './movies-reducer';

export default combineReducers({ movies: searchMovies });
