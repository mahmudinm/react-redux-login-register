import React, {Component, Fragment} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Link to="/">Home</Link>  &nbsp;
        <Link to="/login">Login</Link> &nbsp;
        <Link to="/register">Register</Link> &nbsp;
        <Link to="/admin">Admin</Link> &nbsp;

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/login" component={Login} /> 
          <Route path="/register" component={Register} /> 
          <Route path="/Admin" component={Admin} /> 
        </Switch>

      </Fragment>
    );
  }

}

export default App;
