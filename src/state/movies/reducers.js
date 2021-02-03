import { GET_MOVIES, SEARCH_MOVIES, GET_MOVIE_DETAIL } from './actions';

export const INITIAL_STATE = {
  list: [],
  searchList: [],
  moviesDetail: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        searchList: action.movies,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        moviesDetail: {
          ...state.moviesDetail,
          [action.movie.id]: action.movie,
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
