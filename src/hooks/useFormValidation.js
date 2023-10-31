import React from 'react';

export function useFormValidation() {
  
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  //---ОБРАБОТЧИКИ---
  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage});
    setIsValid(input.closest('form').checkValidity());
  };

  return {values, errors, isValid, handleChange, setValues, setIsValid, setErrors};
};