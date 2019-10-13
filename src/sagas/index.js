import { all } from 'redux-saga/effects';
import { fetchMoviesWatcher, fetchNextMoviesWatcher } from './movies-saga';
import { fetchMovieWatcher } from './movie-detail-saga';

export default function* rootSaga() {
  yield all([fetchMoviesWatcher(), fetchNextMoviesWatcher(), fetchMovieWatcher()]);
}
