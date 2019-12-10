import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// Guest Route untuk user yang blum login ketika ingin mengunjungi halaman admin makan akan redirect ke halaman login
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