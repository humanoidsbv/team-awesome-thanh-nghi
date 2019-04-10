import PropTypes from 'prop-types';
import React from 'react';

import './select.scss';

const Select = ({
  className, defaultValue, id, isInvalid, name, options, onChange, onBlur, required
}) => (
  <select
    className={`
      select-element
      select-element--${isInvalid ? 'invalid' : 'valid'}
      ${className}
    `}
    id={id}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    required={required}
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

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.shape({}),
  id: PropTypes.string,
  isInvalid: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  required: PropTypes.bool
};

Select.defaultProps = {
  className: '',
  defaultValue: '',
  id: '',
  isInvalid: false,
  name: '',
  onBlur: () => null,
  options: [
    {
      label: '',
      value: ''
    }
  ],
  required: false
};

export default Select;
