export const GET_MOVIES = 'movies/GET';
export const GET_MOVIE_DETAIL = 'movies-detail/GET';
export const SEARCH_MOVIES = 'movies/SEARCH';

export const getMovieDetail = (movie) => ({
  type: GET_MOVIE_DETAIL,
  movie,
});

export const getMovies = (movies) => ({
  type: GET_MOVIES,
  movies,
});

export const searchMovies = (movies) => ({
  type: SEARCH_MOVIES,
  movies,
});
