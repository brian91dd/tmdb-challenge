import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './home.modules.scss';
import { useTmdMovies, useSearchTmdb } from '../../state/movies/hooks';
import { TextInput, StarRater } from '../../components';

function Home() {
  const [moviesState, getMoviesState, isLoading] = useTmdMovies();
  const [searchTextState, setSearchTextState] = useState('');
  const [searchList, searchMoviesState, isLoadingSearch] = useSearchTmdb();
  const [filterStarsState, setFilterStarsState] = useState(0);

  useEffect(() => {
    getMoviesState();
  }, []);

  useEffect(() => {
    let searchTimeout;

    if (searchTextState.length > 0) {
      searchTimeout = setTimeout(() => {
        searchMoviesState(searchTextState);
      }, 300);
    }

    return () => clearTimeout(searchTimeout);
  }, [searchTextState]);

  const handleSearchChange = (event) => {
    setSearchTextState(event.target.value);
  };

  const handleStarChange = (stars) => {
    if (filterStarsState === stars) setFilterStarsState(0);
    else setFilterStarsState(stars);
  };

  let moviesList;

  if (searchTextState.length > 0) {
    moviesList = searchList;
  } else {
    moviesList = moviesState;
  }

  if (filterStarsState) {
    moviesList = moviesList.filter(
      (movie) => movie.vote_average > filterStarsState * 2 - 2
        && movie.vote_average < filterStarsState * 2,
    );
  }

  return (
    <>
      <h1>Home page</h1>
      <TextInput handleChange={handleSearchChange} placeHolder="Search" defaultValue={searchTextState} />
      <StarRater onChange={handleStarChange} selectedUntil={filterStarsState} />
      {
        isLoading || isLoadingSearch ? (<p>Loading</p>)
          : (
            <div className={classNames('movie-catalog')}>
              {moviesList.map((movie) => (
                <div key={movie.id}>
                  {movie.title}
                </div>
              ))}
            </div>
          )
      }
    </>
  );
}

export default Home;
