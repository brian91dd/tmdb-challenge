export const GET_MOVIES = 'movies/GET';
export const SEARCH_MOVIES = 'movies/SEARCH';

export const getMovies = (movies) => ({
  type: GET_MOVIES,
  movies,
});

export const searchMovies = (movies) => ({
  type: SEARCH_MOVIES,
  movies,
});
