import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { ReduxForm } from '../../components/ReduxForm';

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required';
  }
  if (!values.email) {
    errors.email = 'Email Required';
  }
  if (!values.password) {
    errors.password = 'Password Required';
  }    
  return errors
}  


const afterSubmit = (result, dispatch) => {
  dispatch(reset('register'));
}

const RegisterForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field placeholder="Enter your Name" 
             name="name" 
             label="Name"
             component={ReduxForm} 
             type="text"/>
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
      <button className="btn btn-primary btn-block" type="submit">REGISTER</button>
    </form>
  );
}

export default reduxForm({
  form: 'register',
  validate,
  onSubmitSuccess: afterSubmit
})(RegisterForm)

