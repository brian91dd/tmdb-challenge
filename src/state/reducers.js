import moviesReducer from './movies/reducers';

const combineReducers = (data, action) => ({
  movies: moviesReducer(data.page, action),
});

export default combineReducers;
