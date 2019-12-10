import instance from '../utils/api';

// Set token ketika telah login supaya bisa mendapatkan data dari server
export const storeToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const loginAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/login', data)
			.then((res) => {
				dispatch({type: 'SET_LOGIN', value: res.data.token});
				storeToken(res.data.token);
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}

export const logoutAPI = () => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/logout', null)
			.then((res) => {
				dispatch({type: 'SET_LOGOUT', value: null});
				localStorage.removeItem('token');
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}

export const registerAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('auth/signup', data)
			.then((res) => {
				dispatch({type: 'SET_REGISTER', value: 'Terima Kasih Telah Mendaftar'});
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}

export const getProtectedAPI = () => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get('protected')
			.then((res) => {
				dispatch({type: 'SET_ADMIN', value: res.data.message})
				resolve(res);
			}, (err) => {
				reject(err);
			})
	})

	return promise
}
