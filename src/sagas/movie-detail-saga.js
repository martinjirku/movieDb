import { put, call, takeLatest } from 'redux-saga/effects';
import { REQUEST_MOVIE, errorMessage } from '../constants';
import { getMovie } from '../api';
import { setMovie, setErrorMovie } from '../actions';

export function* fetchMovie({ data }) {
  try {
    const moviesResponse = yield call(getMovie, data.id);
    if (moviesResponse.Response !== 'False') {
      yield put(setMovie(moviesResponse));
    } else {
      yield put(setErrorMovie(moviesResponse.Error));
    }
  } catch {
    yield put(setErrorMovie(errorMessage));
  }
}

export function* fetchMovieWatcher() {
  yield takeLatest(REQUEST_MOVIE, fetchMovie);
}
