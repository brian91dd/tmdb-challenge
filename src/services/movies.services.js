import { ApiCallTMDB } from '../utils/fetch';

const getMovies = () => ApiCallTMDB({
  url: 'discover/movie',
  method: 'GET',
});

const searchMovies = (searchTerm) => ApiCallTMDB({
  url: 'search/movie',
  method: 'GET',
  params: {
    query: searchTerm,
  },
});

export default {
  getMovies,
  searchMovies,
};
