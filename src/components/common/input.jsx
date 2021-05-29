import React from "react";

const Input = ({ name, label, onChange, value, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        type="text"
        className="control-form"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
