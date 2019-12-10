import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const GuestRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		// const token = JSON.parse(localStorage.getItem('token'));
		const token = JSON.parse(localStorage.getItem('token'));
		if(token) {
			return <Redirect to={{pathname: '/admin'}} />
		}

		return <Component {...props} />
	}} />

)