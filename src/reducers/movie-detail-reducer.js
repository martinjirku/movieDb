import { REQUEST_MOVIE, SET_MOVIE, SET_MOVIE_ERROR } from '../constants';

const getInitialState = () => ({
  loading: false,
  movie: {},
  error: null,
});

export const movieDetailReducer = (state = getInitialState(), action = {}) => {
  const { type, data } = action;
  switch (type) {
    case REQUEST_MOVIE:
      return {
        ...state,
        loading: true,
        movie: {},
        error: null,
      };
    case SET_MOVIE:
      return {
        ...state,
        loading: false,
        movie: data.movie,
        error: null,
      };
    case SET_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        movie: {},
        error: data.error,
      };
    default:
      return state;
  }
};
