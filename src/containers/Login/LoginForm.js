import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ReduxForm } from '../../components/ReduxForm';

// validasi sync/langsung untuk form
const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email Required';
  }
  if (!values.password) {
    errors.password = 'Password Required';
  }    
  return errors
}  

const LoginForm = (props) => {
  const { error, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field placeholder="Enter your Email" 
             name="email" 
             label="Email"
             component={ReduxForm} 
             type="email"/>
      <Field placeholder="Enter your Password" 
             name="password"
             label="Password" 
             component={ReduxForm} 
             type="password"/>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
    </form>
  );
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)

