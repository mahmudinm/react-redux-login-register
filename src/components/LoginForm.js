import React, {Component, Fragment} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { ReduxForm } from './ReduxForm';

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

const LoginForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <Fragment>
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
        <button className="btn btn-primary btn-block" type="submit">LOGIN</button>
      </form>
    </Fragment>
  );
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)

