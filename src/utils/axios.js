import axios from 'axios';

// Create instance
let Axios = axios.create();

// Set the AUTH token for any request
Axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('jwt');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	config.baseURL = 'https://salty-escarpment-24260.herokuapp.com';
	return config;
});

export default Axios;
