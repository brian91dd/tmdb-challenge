import { useState } from 'react';
import { useStateValue } from '../../index';
import MoviesService from '../../../services/movies.services';
import { searchMovies } from '../actions';

const useTmdbSearch = () => {
  const [{ movies }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const handlerSearchMovies = (term) => {
    setIsLoading(true);

    MoviesService.searchMovies(term)
      .then((moviesResult) => {
        dispatch(searchMovies(moviesResult.results));
        setIsLoading(false);
      });
  };

  return [movies.searchList, handlerSearchMovies, isLoading];
};

export default useTmdbSearch;
