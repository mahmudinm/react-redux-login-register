import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// Private Route untuk user yang sudah login ketika ingin mengunjungi halaman login makan akan redirect ke halaman admin
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