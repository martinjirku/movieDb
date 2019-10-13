import {
  SEARCH_MOVIES,
  SET_SEARCHED_MOVIES,
  SEARCH_MOVIES_SET_ERROR,
  SEARCH_MOVIES_NEXT_PAGE,
  ADD_SEARCHED_MOVIES,
} from '../constants';

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
