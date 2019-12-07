import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { PrivateRoute } from '../utils/PrivateRoute';
import { GuestRoute } from '../utils/GuestRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import NavigationBar from './NavigationBar';


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
