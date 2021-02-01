import { GET_MOVIES, SEARCH_MOVIES } from './actions';

export const INITIAL_STATE = {
  list: [],
  searchList: [],
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
        searchList: action.movies.map((movie) => ({
          title: movie.name,
          id: movie.id,
        })),
      };
    default:
      return state;
  }
};

export default moviesReducer;
