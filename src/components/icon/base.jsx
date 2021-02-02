import React from 'react';
import PropTypes from 'prop-types';
import './base.scss';

export default function BaseIcon(props) {
  const {
    height, width, children, viewBox,
  } = props;

  // We want the default dimensions to be 100%, which covers most
  // use-cases, but only if BOTH the width and height props are unset
  const trueWidth = width || height ? width : '100%';
  const trueHeight = width || height ? height : '100%';

  return (
    <svg
      width={trueWidth}
      height={trueHeight}
      focusable="false"
      className="base"
      fill="black"
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

BaseIcon.defaultProps = {
  height: null,
  width: null,
  children: '',
  viewBox: '',
};

BaseIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.node,
};
