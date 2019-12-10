import React, {Component, Fragment} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loginAPI } from '../actions/auth'
import LoginForm from './LoginForm';

class Login extends Component {

  handleSubmit = (data) => {
    // e.preventDefault();
    console.log(data);  

    this.props.login(data)
      .then((res) => {
        console.log(res);
        this.props.history.push('/admin');        
      }, (err) => {
        console.log(err.response);
      })
  }

  render() {
    const {handleSubmit} = this;

    return (
      <Fragment>
        <Container className="mt-5">
          
          <Row>
            <Col md={6} className="mx-auto">
              
              <h2>Login</h2>

              <hr/>

              <LoginForm onSubmit={handleSubmit} />

            </Col>
          </Row>
          
        </Container>
      </Fragment>
    );
  }

}

const reduxDispatch = (dispatch) => ({
  login: (data) => dispatch(loginAPI(data))
});

export default connect(null, reduxDispatch)(Login);
