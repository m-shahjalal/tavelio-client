import axios from 'axios';

// Create instance
let Axios = axios.create();

// Set the AUTH token for any request
Axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('jwt');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	config.baseURL = 'http://localhost:5000';
	return config;
});

export default Axios;
