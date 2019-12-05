import React, {Component, Fragment} from 'react';
import axios from 'axios';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { register } from '../api/auth'


class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);  

    register(this.state)
      .then((res) => {
        console.log(res);     
        this.setState({
          name: '',
          email: '',
          password: '',
          message: 'thanks for registering'
        })
      }, (err) => {
        console.log(err.response);
      })

  }

  render() {
    const {handleChange, handleSubmit} = this;
    const {name, email, password, message} = this.state;

    return (
      <Fragment>
        <Container className="mt-5">
          
          <Row>
            <Col md={6} className="mx-auto">
              
              <h2>Register <b>{message}</b></h2>
              <hr/>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                          type="text" 
                          placeholder="Enter Name" 
                          name="name" 
                          onChange={handleChange} 
                          value={name} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          name="email" 
                          onChange={handleChange} 
                          value={email} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                          type="password" 
                          placeholder="Password"
                          name="password" 
                          onChange={handleChange}
                          value={password} />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  REGISTER
                </Button>
              </Form>

            </Col>
          </Row>
          
          {/*End Of Row*/}

        </Container>
      </Fragment>      
    );
  }

}

export default Register;
