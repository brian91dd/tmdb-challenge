import React from 'react';
import PropTypes from 'prop-types';
import './loading.scss';

function Loading({ className }) {
  return (
    <div className={`loading ${className}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
