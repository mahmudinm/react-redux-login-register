import React, {Component, Fragment} from 'react';

class Register extends Component {

  render() {
    return (
      <Fragment>
        <p>Register</p>
        <hr/>
        <form>
        	<label>Email :</label>
        	<input type="text" name="email"/> <br/>
        	<label>Passwword :</label>
        	<input type="password" name="password"/> <br/>
        	<input type="submit" name="Login"/> 
        </form>
      </Fragment>
    );
  }

}

export default Register;
