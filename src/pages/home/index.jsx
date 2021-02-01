import React, { useEffect } from 'react';
import classNames from 'classnames';
import './home.modules.scss';
import useTmdMovies from '../../state/movies/hooks/use-tmdb-movie';

function Home() {
  const [moviesState, getMoviesState, isLoading] = useTmdMovies();
  useEffect(() => {
    getMoviesState();
  }, []);

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <h1>Home page</h1>
      {moviesState.map((movie) => (
        <div className={classNames('red')} key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
}

export default Home;
