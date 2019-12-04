import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../utils/PrivateRoute';
import { GuestRoute } from '../utils/GuestRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import {createBrowserHistory} from 'history';

// const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router >

        <Link to="/">Home</Link>  &nbsp;
        <Link to="/login">Login</Link> &nbsp;
        <Link to="/register">Register</Link> &nbsp;
        <Link to="/admin">Admin</Link> &nbsp;

        <Route exact path="/" component={Home} /> 
        <GuestRoute path="/login" component={Login} /> 
        <GuestRoute path="/register" component={Register} /> 
        <PrivateRoute path="/admin" component={Admin} />

      </Router>
    );
  }

}

export default App;
