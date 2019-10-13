export const omdbApiLocation = 'http://omdbapi.com/';
export const omdbApiKey = process.env.OMDAPI_APIKEY || 'b5042bf7';
export const appTitle = 'Movie database';
export const errorMessage = 'Something went wrong.';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_MOVIES_NEXT_PAGE = 'SEARCH_MOVIES_NEXT_PAGE';
export const SET_SEARCHED_MOVIES = 'SET_MOVIE_REQUEST';
export const ADD_SEARCHED_MOVIES = 'ADD_SEARCHED_MOVIES';
export const SEARCH_MOVIES_SET_ERROR = 'SEARCH_MOVIES_SET_ERROR';

export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_MOVIE_ERROR = 'SET_MOVIE_ERROR';

export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';
export const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
export const SAVE_FAVORITE_MOVIES = 'SAVE_FAVORITE_MOVIES';
export const REMOVE_FAVORITE_MOVIE = 'REMOVE_FAVORITE_MOVIE';
