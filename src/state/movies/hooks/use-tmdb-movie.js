import { useState } from 'react';
import { useStateValue } from '../../index';
import MoviesService from '../../../services/movies.services';
import { getMovies } from '../actions';

const useTmdMovies = () => {
  const [{ movies }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const handlerGetMovies = () => {
    if (movies.list.length === 0) {
      setIsLoading(true);

      MoviesService.getMovies()
        .then((moviesResult) => {
          dispatch(getMovies(moviesResult.results));
          setIsLoading(false);
        });
    }
  };

  return [movies.list, handlerGetMovies, isLoading];
};

export default useTmdMovies;
