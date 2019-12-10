import React, {Component, Fragment} from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { logoutAPI, getProtectedAPI } from '../../actions/auth';
import { connect } from 'react-redux';

class Admin extends Component {
  
  componentDidMount() {
  	this.props.getProtected()
  		.then((res) => {
  			console.log(res);
  		}, (err) => {
  			console.log(err.response);
  		})
  }

  handleLogout = () => {
  	this.props.logout()
  		.then((res) => {
  			console.log(res);
  			this.props.history.push('/login');
  		}, (err) => {
  			console.log(err.response);
  		}) 
  }

  render() {
  	const {handleLogout} = this;
    const {message} = this.props.message;

    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col>
              <p>Admin Dashboard</p>
              <hr/>
              <p>{message}</p>
              <Button onClick={handleLogout}>Logout</Button>
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
  logout: () => dispatch(logoutAPI()),
  getProtected: () => dispatch(getProtectedAPI())
})

export default connect(reduxState, reduxDispatch)(Admin);
