import { put, call, all, take } from 'redux-saga/effects';
import { ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from '../constants';
//import { uniqueBy } from 'lodash';
import { setFavoriteMovies } from '../actions';

const readFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favoriteMovies')) || [];
};
const writeToLocalStorage = (movies) => {
  localStorage.setItem('favoriteMovies', JSON.stringify(movies));
};

export function* readFavoriteFromLocalStorage() {
  const storageFavoriteMovies = readFromLocalStorage();
  yield put(setFavoriteMovies(storageFavoriteMovies));
}

export function* addFavoriteToLocalStorage() {
  while (true) {
    const { data } = yield take(ADD_FAVORITE_MOVIE);
    const movies = readFromLocalStorage();
    writeToLocalStorage([...movies, data.movie]);
  }
}

export function* removeFavoriteMovieFromLocalStorage() {
  while (true) {
    const { data } = yield take(REMOVE_FAVORITE_MOVIE);
    const movies = readFromLocalStorage();
    writeToLocalStorage(movies.filter((m) => m.imdbID !== data.id));
  }
}

export function* addFavoriteMoviesWatcher() {
  yield call(readFavoriteFromLocalStorage);
  yield all([removeFavoriteMovieFromLocalStorage(), addFavoriteToLocalStorage()]);
}
