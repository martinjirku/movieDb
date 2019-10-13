import { put, call, takeLatest, select, takeLeading } from 'redux-saga/effects';
import { SEARCH_MOVIES, SEARCH_MOVIES_NEXT_PAGE, errorMessage } from '../constants';
import { searchMovies } from '../api';
import { setFoundMovies, setLoadNextMovies, setErrorOnMovieSearch } from '../actions';

export function* fetchMovies({ data }) {
  try {
    const moviesResponse = yield call(searchMovies, 1, data.searchTerm);
    if (moviesResponse.Response !== 'False') {
      yield put(setFoundMovies(moviesResponse));
    } else {
      yield put(setErrorOnMovieSearch(moviesResponse.Error, true));
    }
  } catch {
    yield put(setErrorOnMovieSearch(errorMessage, true));
  }
}

export function* fetchMoviesWatcher() {
  yield takeLatest(SEARCH_MOVIES, fetchMovies);
}

export function* fetchNextMovies() {
  const { page, searchTerm } = yield select((s) => s.movies);
  const nextPage = page + 1;
  try {
    const moviesResponse = yield call(searchMovies, nextPage, searchTerm);
    if (moviesResponse.Response !== 'False') {
      yield put(setLoadNextMovies(moviesResponse, nextPage));
    } else {
      yield put(setErrorOnMovieSearch(moviesResponse.Error, false));
    }
  } catch {
    yield put(setErrorOnMovieSearch(errorMessage, false));
  }
}

export function* fetchNextMoviesWatcher() {
  yield takeLeading(SEARCH_MOVIES_NEXT_PAGE, fetchNextMovies);
}
