import axios from 'axios';

const covidAPI = axios.create({
	baseURL: 'https://api.covid19api.com/',
	timeout: 1000,
});

export default covidAPI;
