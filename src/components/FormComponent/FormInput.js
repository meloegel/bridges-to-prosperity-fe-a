import React from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.labelId}>{props.labelId}:</label>
      <input
        name={props.labelId}
        value={props.value}
        onChange={(input) => props.handleInput(input)}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default FormInput;

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
};
