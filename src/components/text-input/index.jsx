import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  handleChange, defaultValue, placeHolder, className,
}) {
  return (
    <input
      onChange={handleChange}
      placeholder={placeHolder}
      defaultValue={defaultValue}
      className={className}
    />
  );
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  defaultValue: '',
  placeHolder: '',
  className: '',
};

export default TextInput;
