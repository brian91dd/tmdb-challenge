import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTmdbMovieDetail } from '../../state/movies/hooks';
import Star from '../../components/icon/icons/star';
import { Loading } from '../../components';
import './detail.scss';

function Detail() {
  const { id } = useParams();
  const [movieDetail, getMovieDetailState, isLoading] = useTmdbMovieDetail(id);

  useEffect(() => {
    getMovieDetailState();
  }, []);

  return (
    <div className="detail-page">
      {
        (isLoading || !movieDetail) ? (
          <Loading />
        ) : (
          <div className="movie-content">
            <div className="main-image-container">
              <div className="backdrop-image">
                <img src={`${process.env.REACT_APP_TMDB_IMAGES}w1280${movieDetail.backdrop_path}`} alt="" />
              </div>
              <div className="page-container">
                <div className="title-container">
                  <img className="poster" src={`${process.env.REACT_APP_TMDB_IMAGES}w200${movieDetail.poster_path}`} alt="" />
                  <div className="main-data">
                    <h1>{`${movieDetail.title} (${movieDetail.release_date.substring(0, 4)})`}</h1>
                    <div className="rating">
                      <Star color="gold" />
                      {movieDetail.vote_average}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-container content">
              <h2>Genre:</h2>
              <p>{movieDetail.genres.map((genre) => genre.name).join(', ')}</p>
              <h2>Overview</h2>
              <p>{movieDetail.overview}</p>
              <h2>Status</h2>
              <p>{movieDetail.status}</p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Detail;
