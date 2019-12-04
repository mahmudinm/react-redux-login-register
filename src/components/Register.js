import React, {Component, Fragment} from 'react';
import axios from 'axios';
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
        <p>Register <b>{message}</b></p>
        <hr/>
        <form onSubmit={handleSubmit} >
          <label>Name :</label>
          <input type="text" name="name" onChange={handleChange} value={name} /> <br/>
          <label>Email :</label>
          <input type="text" name="email" onChange={handleChange} value={email} /> <br/>
          <label>Passwword :</label>
          <input type="password" name="password" onChange={handleChange} value={password} /> <br/>
          <input type="submit" value="Register"/> 
        </form>
      </Fragment>
    );
  }

}

export default Register;
