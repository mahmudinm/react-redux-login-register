import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../utils/PrivateRoute';
import { GuestRoute } from '../utils/GuestRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import { Navbar,
         Container,
         Nav,
         NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const {isAuthenticated} = this.props.auth;

    const GuestNav = (
      <Fragment>
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>              
      </Fragment>
    )

    const UserNav = (
      <NavDropdown title="Admin" id="basic-nav-dropdown">
        <LinkContainer to="/admin">
          <NavDropdown.Item>admin</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />
        <LinkContainer to="/admin">
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    )

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
              </Nav>
              <Nav>
                {isAuthenticated ? UserNav : GuestNav }
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

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);
