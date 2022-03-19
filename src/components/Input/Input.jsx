import React from 'react';
import { useState } from "react";

import "./Input.sass";

const Input = ({
  labelName,
  inputName,
  type,
  value,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);

  const handleToggle = () => {
    setFocus(prevState => !prevState);
  };

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target)
  };

  const labelClassName = `input__label input__label_text ${focus || value ? "_active" : ""}` 

  return (
    <label className="input">
      <p className={labelClassName}>
        {labelName}
      </p>
      <input
        type={type}
        name={inputName}
        className="input__field input__field_text"
        value={value || ''}
        onFocus={handleToggle}
        onBlur={handleToggle}
        onChange={handleChange}
        autoComplete="off"
      />
    </label>
  );
};

export default Input;
