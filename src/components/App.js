import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';

class App extends Component {

  render() {
    return (
      <Router>
        <Link to="/">Home</Link>  &nbsp;
        <Link to="/login">Login</Link> &nbsp;
        <Link to="/register">Register</Link> &nbsp;
        <Link to="/Admin">Admin</Link> &nbsp;

        <Route exact path="/" component={Home} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/register" component={Register} /> 
        <Route path="/Admin" component={Admin} /> 

      </Router>
    );
  }

}

export default App;
