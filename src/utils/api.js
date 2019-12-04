import axios from 'axios';
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {history} from '../index';

const token = JSON.parse(localStorage.getItem('token'));

const instance = axios.create({
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Authorization': `Bearer ${token}`
	}
});

// Refresh token jika error 401 / tokennya expired & Logout jika token blacklist atau error 500
instance.interceptors.response.use((response) => {
	return response;
}, (error) => {

	// Jika response 500 dan juga token tidak bisa di refresh lagi maka akan logout dan masuk ke halaman login
	if(error.response.status === 500 && error.response.data.error.message === 'Token has expired and can no longer be refreshed') {
		console.log('token di hapus dan logout kehalaman login');
		console.log(error.response);
		localStorage.removeItem('token');

		return new Promise((resolve, reject) => {
			// history nya belom bisa ngepush ke halaman cuma linknya doang terupdate
			// history.push('/login');

			console.log('redirect ke halaman login')
			return window.location.href = '/login';
			// reject(error);
		})
	}

	console.log(error.response);

	// refresh token jika error 401 dan mesage token has expired
	if(error.response.status === 401 && error.response.data.error.message === 'Token has expired') {
		console.log('the token must be refreshed');
		return instance.post('auth/refresh', null)
			.then((res) => {
				const config = error.config;			
				localStorage.removeItem('token');
				localStorage.setItem('token', JSON.stringify(res.data.token));
				config.headers['Authorization'] = `Bearer ${res.data.token}`; 

				return new Promise((resolve, reject) => {
					axios.request(config).then(response => {
						resolve(response);
					}).catch((error) => {
						reject(error);
					})
				})
			})
			.catch((error) => {
				Promise.reject(error);
			})
	}

	return Promise.reject(error);
})

export default instance;