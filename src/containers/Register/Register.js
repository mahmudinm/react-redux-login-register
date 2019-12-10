import React, {Component, Fragment} from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm'
import { registerAPI } from '../../actions/auth'

class Register extends Component {

  state = {
    message: ''
  }

  handleSubmit = (data) => {
    console.log(data)

    return this.props.register(data)
      .then((res) => {
        console.log(res);     
        this.setState({
          message: 'Thanks For Registering'
        })
      }, (err) => {
        console.log(err.response);
        throw new SubmissionError({
          _error: 'Email has been used'
        })
      })

  }

  render() {
    const {handleSubmit} = this
    const {message} = this.state

    return (
      <Fragment>
        <Container className="mt-5">
          
          <Row>
            <Col md={6} className="mx-auto">
              
              <h2>Register</h2>
              {message && <div className="alert alert-success">{message}</div>}
              <hr/>

              <RegisterForm onSubmit={handleSubmit}/>  

            </Col>
          </Row>
          

        </Container>
      </Fragment>      
    );
  }

}

const reduxDispatch = (dispatch) => ({
  register: (data) => dispatch(registerAPI(data))
})

export default connect(null, reduxDispatch)(Register);
