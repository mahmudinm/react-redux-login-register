import axios from 'axios';

export default function setAuth(token) {
	if(token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}