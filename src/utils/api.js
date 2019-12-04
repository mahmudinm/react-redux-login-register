import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));
const CancelToken = axios.CancelToken;
let cancel;

const instance = axios.create({
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Content-Type' : 'application/json',
		'Accept' : 'application/json',
		'Authorization': `Bearer ${token}`
	},
    cancelToken: new CancelToken(function executor(c) {
        cancel = c;
    }),
});

export default instance;