import React from 'react';

// ReduxForm custom field untuk sync validasi / validasi secara langsung
export const ReduxForm = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
      <input {...input} 
        className={
          touched && error ? 'form-control is-invalid' : 'form-control'
        } 
        placeholder={label}
        type={type} />
      {touched && ((error && <div className="invalid-feedback" >{error}</div>))}
  </div>
)


