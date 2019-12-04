import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {getProtected, logout} from '../api/auth';

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
  	logout()
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
        <p>Admin Dashboard</p>
        <hr/>
        <p>{this.state.message}</p>
        <button onClick={handleLogout} >Logout</button>
      </Fragment>
    );
  }

}

export default Admin;
