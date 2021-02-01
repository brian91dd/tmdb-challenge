import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './home.modules.scss';
import { useTmdMovies, useSearchTmdb } from '../../state/movies/hooks';
import { TextInput } from '../../components';

function Home() {
  const [moviesState, getMoviesState, isLoading] = useTmdMovies();
  const [searchTextState, setSearchTextState] = useState('');
  const [searchList, searchMoviesState, isLoadingSearch] = useSearchTmdb();

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

  let moviesList;

  if (searchTextState.length > 0) {
    moviesList = searchList;
  } else {
    moviesList = moviesState;
  }

  return (
    <>
      <h1>Home page</h1>
      <TextInput handleChange={handleSearchChange} placeHolder="Search" defaultValue={searchTextState} />

      {
        isLoading || isLoadingSearch ? (<p>Loading</p>)
          : (
            <div className={classNames('movie-catalog')}>
              {moviesList.map((movie) => (
                <div key={movie.id}>{movie.title}</div>
              ))}
            </div>
          )
      }
    </>
  );
}

export default Home;
