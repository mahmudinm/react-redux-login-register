import React, {Component, Fragment} from 'react';
import {Container} from 'react-bootstrap'

class Home extends Component {

  render() {
    return (
      <Fragment>
      	<Container className="mt-5">
          <p>React Login menggunakan axios dan bootstrap dengan API Laravel & JWT Authetication</p>
	        <hr/>
      	</Container>
      </Fragment>
    );
  }

}

export default Home;
