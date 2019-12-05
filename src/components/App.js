import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../utils/PrivateRoute';
import { GuestRoute } from '../utils/GuestRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import {createBrowserHistory} from 'history';
import { Button, 
         Navbar,
         Container, 
         Form,
         Nav,
         NavDropdown,
         FormControl } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>React Authentication</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <LinkContainer to="/admin">
                    <NavDropdown.Item>admin</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/admin">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Route exact path="/" component={Home} /> 
        <GuestRoute path="/login" component={Login} /> 
        <GuestRoute path="/register" component={Register} /> 
        <PrivateRoute path="/admin" component={Admin} />

      </Router>
    );
  }

}

export default App;
