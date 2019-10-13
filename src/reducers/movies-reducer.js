import {
  SEARCH_MOVIES,
  SET_SEARCHED_MOVIES,
  SEARCH_MOVIES_SET_ERROR,
  SEARCH_MOVIES_NEXT_PAGE,
  ADD_SEARCHED_MOVIES,
} from '../constants';

const getInitialState = () => ({
  searchTerm: '',
  loading: false,
  movies: [],
  totalResults: 0,
  page: 1,
  error: null,
});

export const searchMovies = (state = getInitialState(), action = {}) => {
  const { type, data } = action;
  switch (type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        searchTerm: data.searchTerm,
        loading: true,
        totalResults: 0,
        page: 1,
        error: null,
      };
    case SEARCH_MOVIES_NEXT_PAGE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_SEARCHED_MOVIES:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...data.movies],
        page: data.page,
        error: null,
      };
    case SEARCH_MOVIES_SET_ERROR:
      const clearState = data.clearState ? getInitialState() : state;
      return {
        ...clearState,
        searchTerm: state.searchTerm,
        error: data.error,
      };
    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        loading: false,
        totalResults: data.totalResults,
        movies: data.movies,
        error: null,
      };
    default:
      return state;
  }
};
