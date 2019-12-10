import React, {Component, Fragment} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm'
import { registerAPI } from '../../actions/auth'

class Register extends Component {

  handleSubmit = (data) => {
    console.log(data)

    return this.props.register(data)
      .then((res) => {
        console.log(res);     
      }, (err) => {
        console.log(err.response);
        // validasi async / validasi ke server ketika terjadi error pada server        
        throw new SubmissionError({
          _error: 'Email has been used'
        })
      })

  }

  render() {
    const {handleSubmit} = this
    const {message} = this.props.message

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

const reduxState = (state) => ({
  message: state.auth
})

const reduxDispatch = (dispatch) => ({
  register: (data) => dispatch(registerAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);
