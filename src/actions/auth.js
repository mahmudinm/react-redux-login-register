import instance from '../utils/api';

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

