import { SET_FAVORITE_MOVIES, ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from '../constants';

const getInitialState = () => ({
  movies: [],
});

export const favoriteMoviesReducer = (state = getInitialState(), action = {}) => {
  const { type, data } = action;
  switch (type) {
    case SET_FAVORITE_MOVIES:
      return {
        ...state,
        movies: data.movies,
      };
    case ADD_FAVORITE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, data.movie],
      };
    case REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((m) => m.imdbID !== data.id),
      };
    default:
      return state;
  }
};
