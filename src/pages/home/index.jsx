import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './home.scss';
import { useTmdMovies, useSearchTmdb } from '../../state/movies/hooks';
import {
  TextInput, StarRater, PosterItem, Loading,
} from '../../components';

function Home() {
  const [moviesState, getMoviesState, isLoadingState] = useTmdMovies();
  const [searchTextState, setSearchTextState] = useState('');
  const [searchList, searchMoviesState, isLoadingSearchState] = useSearchTmdb();
  const [filterStarsState, setFilterStarsState] = useState(0);
  const [firstLoadState, setFirstLoadState] = useState(true);

  useEffect(() => {
    getMoviesState();
  }, []);

  useEffect(() => {
    let searchTimeout;

    if (searchTextState.length > 0) {
      searchTimeout = setTimeout(() => {
        searchMoviesState(searchTextState);
        setFirstLoadState(false);
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
      (movie) => movie.vote_average >= filterStarsState * 2 - 2
        && movie.vote_average <= filterStarsState * 2,
    );
  }

  const isLoading = isLoadingState || isLoadingSearchState;
  const notFoundMovies = !isLoading && moviesList.length === 0 && !firstLoadState;

  return (
    <div className="homepage page-container">

      <div className="movies-title">
        <h1>The Movie Database</h1>
        <div className="filters">
          <TextInput
            handleChange={handleSearchChange}
            placeHolder="Search"
            defaultValue={searchTextState}
            className="search-input"
          />
          <p>Rating: </p>
          <StarRater onChange={handleStarChange} selectedUntil={filterStarsState} />
        </div>
      </div>
      <div className={classNames('movie-catalog')}>
        {
          isLoading && (<Loading />)
        }
        {
          notFoundMovies && (<p>Movies not found</p>)
        }
        {
          moviesList.length > 0 && (
            moviesList.map((movie) => (
              <PosterItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                voteAverage={movie.vote_average}
                poster={
                  movie.poster_path ? `${process.env.REACT_APP_TMDB_IMAGES}w200${movie.poster_path}`
                    : `${process.env.PUBLIC_URL}/no-poster.jpg`
                }
              />
            ))
          )
        }
      </div>
    </div>
  );
}

export default Home;
