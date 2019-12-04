import axios from 'axios';

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

	if(error.response.status !== 401) {
		return new Promise((resolve, reject) => {
			console.log('from interceptors');
			console.log(error.response);
			reject(error);
		})
	}

	// error.config.url === '/auth/refresh'
	// if(error.response.error.statusCode === 500 || error.response.error.message === 'Token has expired and can no longer be refreshed') {
	// 	localStorage.removeItem();
	// 	console.log('ok error dari sini sampai');
	// 	{/*<Redirect to="/login" />*/}
	// 	return new Promise((resolve, reject) => {
	// 		reject(error);
	// 	})
	// }

	console.log(error.response);

	if(error.response.status === 401 && error.response.data.error.message == 'Token has expired') {
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

	// if(error.response.status === 401)


})

export default instance;