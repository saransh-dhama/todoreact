import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3200/api/',
	timeout: 1000,
});

export default api;
