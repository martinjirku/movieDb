import { omdbApiKey, omdbApiLocation } from './constants';

export const searchMovies = (pageNumber = 1, searchTerm) => {
  return fetch(`${omdbApiLocation}?apiKey=${omdbApiKey}&s=${searchTerm}&page=${pageNumber}`).then((resp) =>
    resp.json(),
  );
};

export const getMovie = (movieId) => {
  return fetch(`${omdbApiLocation}/?apiKey=${omdbApiKey}&i=${movieId}`).then((resp) => resp.json());
};
