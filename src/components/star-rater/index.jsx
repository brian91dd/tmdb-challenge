import React from 'react';
import PropTypes from 'prop-types';
import Star from '../icon/icons/star';
import './star-rater.scss';

function StarRater({ onChange, selectedUntil }) {
  const stars = [];
  const handleChange = (star) => () => {
    onChange(star);
  };

  for (let i = 0; i < 5; i += 1) {
    const selectedUntilClass = selectedUntil === (i + 1) ? 'selected-until' : '';
    stars.push(
      <button type="button" onClick={handleChange(i + 1)} key={`star-${i}`} className={selectedUntilClass}>
        <Star color="gold" />
        <Star color="white" />
      </button>,
    );
  }

  return (
    <div className="star-rater">
      <div className={`rating${selectedUntil > 0 ? ' selected-until' : ''}`}>
        {stars}
      </div>
    </div>
  );
}

StarRater.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedUntil: PropTypes.number,
};

StarRater.defaultProps = {
  selectedUntil: 0,
};

export default StarRater;
