import fetch from '../utils/api';

export const login = (data) => {
	const promise = new Promise((resolve, reject) => {
		fetch.post('auth/login', data)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}


export const register = (data) => {
	const promise = new Promise((resolve, reject) => {
		fetch.post('auth/signup', data)
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
		fetch.post('auth/logout', null)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}


export const getProtected = () => {
	const promise = new Promise((resolve, reject) => {
		fetch.get('protected')
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}
