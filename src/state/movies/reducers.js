import { GET_MOVIES } from './actions';

export const INITIAL_STATE = {
  list: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    default:
      return state;
  }
};

export default moviesReducer;
