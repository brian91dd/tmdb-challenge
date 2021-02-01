import { ApiCallTMDB } from '../utils/fetch';

const getMovies = () => ApiCallTMDB({
  url: 'discover/movie',
  method: 'GET',
});

export default {
  getMovies,
};
