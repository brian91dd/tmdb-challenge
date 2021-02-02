import React from 'react';
import PropTypes from 'prop-types';
import BaseIcon from '../base';

export default function Search(props) {
  const { color } = props;
  const hexColors = {
    gold: {
      fill: '#f9de00',
      stroke: '#f9de00',
    },
    black: {
      fill: '#000',
      stroke: '#000',
    },
    white: {
      fill: '#fff',
      stroke: '#000',
    },
  };

  return (
    <BaseIcon
      viewBox="0 0 24 24"
    >
      <path stroke={hexColors[color].stroke} fill={hexColors[color].fill} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </BaseIcon>
  );
}

Search.propTypes = {
  color: PropTypes.oneOf(['white', 'black', 'gold']),
};

Search.defaultProps = {
  color: 'black',
};
