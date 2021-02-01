import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ handleChange, defaultValue, placeHolder }) {
  return (
    <input
      onChange={handleChange}
      placeholder={placeHolder}
      defaultValue={defaultValue}
    />
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
};

TextInput.defaultProps = {
  defaultValue: '',
  placeHolder: '',
};

export default TextInput;
