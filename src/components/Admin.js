import React, {Component, Fragment} from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import {getProtected} from '../api/auth';
import {logoutAPI} from '../actions/auth';
import {connect} from 'react-redux';

class Admin extends Component {
  
  state = {
  	message: ''
  }

  componentDidMount() {
  	getProtected()
  		.then((res) => {
  			console.log(res);
  			this.setState({
  				message: res.data.message
  			})
  		}, (err) => {
  			console.log(err.response);
  		})

  }

  handleLogout = () => {
    // const { logout } = this.props

  	this.props.logout()
  		.then((res) => {
  			console.log(res);
  			this.props.history.push('/login');
  			// localStorage.removeItem('token');  			
  		}, (err) => {
  			console.log(err.response);
  		}) 
  }

  render() {
  	const {handleLogout} = this;

    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col>
              <p>Admin Dashboard</p>
              <hr/>
              <p>{this.state.message}</p>
              <Button onClick={handleLogout}>Logout</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }

}

const reduxDispatch = (dispatch) => ({
  logout: () => dispatch(logoutAPI())
})

export default connect(null, reduxDispatch)(Admin);
