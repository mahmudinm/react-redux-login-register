import instance from '../utils/api';

export const storeToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const login = (data) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/login', data)
			.then((res) => {
				storeToken(res.data.token);
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}


export const register = (data) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/signup', data)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}


export const logout = () => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/logout', null)
			.then((res) => {
				localStorage.removeItem('token');
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}


export const getProtected = () => {
	const promise = new Promise((resolve, reject) => {
		instance.get('protected')
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}