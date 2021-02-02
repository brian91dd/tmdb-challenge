import moviesReducer from './movies/reducers';

const combineReducers = (data, action) => ({
  movies: moviesReducer(data.movies, action),
});

export default combineReducers;
