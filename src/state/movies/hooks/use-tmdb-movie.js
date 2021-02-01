import { useState } from 'react';
import { useStateValue } from '../../index';
import MoviesService from '../../../services/movies.services';
import { getMovies as getMoviesAction } from '../actions';

const useTmdMovies = () => {
  const [{ movies }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = () => {
    setIsLoading(true);

    MoviesService.getMovies()
      .then((moviesResult) => {
        dispatch(getMoviesAction(moviesResult.results));
        setIsLoading(false);
      });
  };

  return [movies.list, getMovies, isLoading];
};

export default useTmdMovies;
