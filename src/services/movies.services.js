import { ApiCallTMDB } from '../utils/fetch';

const getMovies = (params) => ApiCallTMDB({
  url: 'discover/movie',
  method: 'GET',
  params,
});

const searchMovies = (searchTerm) => ApiCallTMDB({
  url: 'search/movie',
  method: 'GET',
  params: {
    query: searchTerm,
  },
});

const getMovieDetail = (movieId) => ApiCallTMDB({
  url: `movie/${movieId}`,
  method: 'GET',
});

export default {
  getMovies,
  searchMovies,
  getMovieDetail,
};
