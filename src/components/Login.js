import React, {Component, Fragment} from 'react';
import axios from 'axios';
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
        <p>Login</p>
        <hr/>
        <form onSubmit={handleSubmit} >
        	<label>Email :</label>
        	<input type="text" name="email" onChange={handleChange} /> <br/>
        	<label>Passwword :</label>
        	<input type="password" name="password" onChange={handleChange} /> <br/>
        	<input type="submit" value="Login"/> 
        </form>
      </Fragment>
    );
  }

}

export default Login;
