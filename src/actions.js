import {
  SEARCH_MOVIES,
  SET_SEARCHED_MOVIES,
  SEARCH_MOVIES_SET_ERROR,
  SEARCH_MOVIES_NEXT_PAGE,
  ADD_SEARCHED_MOVIES,
  REQUEST_MOVIE,
  SET_MOVIE,
  SET_MOVIE_ERROR,
  SET_FAVORITE_MOVIES,
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE,
} from './constants';

export const getMovies = (searchTerm) => ({
  type: SEARCH_MOVIES,
  data: {
    searchTerm,
  },
});

export const loadNextPage = () => ({
  type: SEARCH_MOVIES_NEXT_PAGE,
});

export const setFoundMovies = (moviesResponse) => ({
  type: SET_SEARCHED_MOVIES,
  data: {
    movies: moviesResponse.Search,
    totalResults: moviesResponse.totalResults,
  },
});

export const setLoadNextMovies = (moviesResponse, page = 1) => ({
  type: ADD_SEARCHED_MOVIES,
  data: {
    movies: moviesResponse.Search,
    page,
  },
});

export const setErrorOnMovieSearch = (error, clearState = true) => ({
  type: SEARCH_MOVIES_SET_ERROR,
  data: {
    error,
    clearState,
  },
});

export const getMovie = (id) => ({
  type: REQUEST_MOVIE,
  data: {
    id,
  },
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  data: {
    movie,
  },
});
export const setErrorMovie = (errorMessage) => ({
  type: SET_MOVIE_ERROR,
  data: { errorMessage },
});

export const setFavoriteMovies = (movies) => ({
  type: SET_FAVORITE_MOVIES,
  data: { movies },
});

export const addFavoriteMovie = (movie) => ({
  type: ADD_FAVORITE_MOVIE,
  data: { movie },
});

export const removeFavoriteMovie = (movie) => ({
  type: REMOVE_FAVORITE_MOVIE,
  data: { id: movie.imdbID },
});
