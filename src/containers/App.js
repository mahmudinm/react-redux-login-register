import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { PrivateRoute } from '../components/PrivateRoute';
import { GuestRoute } from '../components/GuestRoute';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Admin from './Admin/Admin';
import NavigationBar from '../components/NavigationBar';

const history = createBrowserHistory();

class App extends Component {

  render() {

    return (
      <Router history={history}>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} /> 
          <GuestRoute path="/login" component={Login} /> 
          <GuestRoute path="/register" component={Register} /> 
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>

      </Router>
    );
  }

}


export default App;
