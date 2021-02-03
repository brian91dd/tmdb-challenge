import { useState } from 'react';
import { useStateValue } from '../../index';
import MoviesService from '../../../services/movies.services';
import { getMovieDetail } from '../actions';

const useTmdMovies = (movieId) => {
  const [{ movies }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const movieSelected = movies.moviesDetail[movieId];

  const handlerGetMovies = () => {
    if (!movieSelected) {
      setIsLoading(true);

      MoviesService.getMovieDetail(movieId)
        .then((movieResult) => {
          dispatch(getMovieDetail(movieResult));
          setIsLoading(false);
        })
        .catch(() => {
          window.location = '/not-found';
        });
    }
  };

  return [
    movieSelected,
    handlerGetMovies,
    isLoading,
  ];
};

export default useTmdMovies;
