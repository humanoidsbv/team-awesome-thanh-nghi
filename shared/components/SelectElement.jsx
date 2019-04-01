import PropTypes from 'prop-types';
import React from 'react';

import './select-element.scss';

const SelectElement = ({
  defaultValue, id, isInvalid, name, options, onChange, onBlur, required
}) => (
  <select
    className={`
      select-element
      select-element--${isInvalid ? 'invalid' : 'valid'}
    `}
    onChange={onChange}
    required={required}
    id={id}
    name={name}
    onBlur={onBlur}
  >
    {[defaultValue, ...options].map(option => (
      <option
        key={option.label}
        value={option.value}
      >
        {option.label}
      </option>
    ))}
  </select>
);

SelectElement.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({}).isRequired,
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  required: PropTypes.bool
};

SelectElement.defaultProps = {
  id: '',
  isInvalid: false,
  name: '',
  onBlur: () => null,
  required: false
};

export default SelectElement;
