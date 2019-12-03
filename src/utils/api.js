import axios from 'axios';


const token = JSON.parse(localStorage.getItem('token'));

const instance = axios.create({
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Authorization': `Bearer ${token}`
	}
});

export default instance;