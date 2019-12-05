import React, {Component, Fragment} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { login } from '../api/auth'

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);  

    login(this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push('/admin');        
      }, (err) => {
        console.log(err.response);
      })
  }

  render() {
    const {handleChange, handleSubmit} = this;

    return (
      <Fragment>
        <Container className="mt-5">
          
          <Row>
            <Col md={6} className="mx-auto">
              
              <h2>Login</h2>

              <hr/>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          name="email" 
                          onChange={handleChange} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                          type="password" 
                          placeholder="Password"
                          name="password" 
                          onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  LOGIN
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

export default Login;
