import React from "react";

const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};
export default Input;
