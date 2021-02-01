export const GET_MOVIES = 'movies/GET';

export const getMovies = (movies) => ({
  type: GET_MOVIES,
  movies,
});
