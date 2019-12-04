import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		// const token = JSON.parse(localStorage.getItem('token'));
		const token = JSON.parse(localStorage.getItem('token'));
		if(!token) {
			return <Redirect to={{pathname: '/login'}} />
		}

		return <Component {...props} />
	}} />

)