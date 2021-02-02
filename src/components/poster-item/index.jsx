import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Star from '../icon/icons/star';
import './poster-item.scss';

function PosterItem({
  title, poster, voteAverage, year,
  id,
}) {
  return (
    <Link
      to={{
        pathname: `/detail/${id}`,
      }}
      className="poster-item"
    >
      <div>
        <div className="image-container">
          <img src={poster} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="extra-data">
          {voteAverage > -1 && (
            <span>
              {voteAverage}
              <Star color="gold" />
            </span>
          )}
          <span>{year}</span>
        </div>
      </div>
    </Link>
  );
}

PosterItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  voteAverage: PropTypes.string,
};

PosterItem.defaultProps = {
  voteAverage: -1,
};

export default PosterItem;
