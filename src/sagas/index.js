import { all } from 'redux-saga/effects';
import { fetchMoviesWatcher, fetchNextMoviesWatcher } from './movies-saga';

export default function* rootSaga() {
  yield all([fetchMoviesWatcher(), fetchNextMoviesWatcher()]);
}
