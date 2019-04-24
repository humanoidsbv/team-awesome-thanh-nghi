import React from 'react';

import './select.scss';

export type Option = {
  label: string
  value: string
}

interface SelectProps {
  className?: string;
  defaultValue?: Option;
  id?: string;
  isInvalid?: boolean;
  name?: string;
  options: Option[];
  onChange: () => (void);
  onBlur?: () => (void);
  required?: boolean;
}

const Select = ({
  className, defaultValue, id, isInvalid, name, options, onChange, onBlur, required
}: SelectProps) => (
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

export default Select;
