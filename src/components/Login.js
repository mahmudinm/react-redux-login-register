import React, {Component, Fragment} from 'react';
import axios from 'axios';
import setAuth from '../utils/setAuth';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  componentWillUnmount() {
    const token = JSON.parse(localStorage.getItem('token'));
    setAuth(token);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8000/api/auth/login', this.state)
      .then((res) => {
        console.log(res);
        setAuth(res.data.token);
        localStorage.setItem('token', JSON.stringify(res.data.token));
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
