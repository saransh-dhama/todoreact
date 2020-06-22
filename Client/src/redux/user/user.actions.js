import { UserActionTypes } from './user.types';
import covidAPI from '../../axios/config';
import axios from 'axios';

export const fetchDataPending = () => {
	return {
		type: UserActionTypes.FETCH_DATA_PENDING,
	};
};
export const fetchDataSuccess = (data) => {
	return {
		type: UserActionTypes.FETCH_DATA_SUCCESS,
		payload: data,
	};
};
export const fetchDataError = (error) => {
	return {
		type: UserActionTypes.FETCH_DATA_ERROR,
		error: error,
	};
};

export const fetchUserData = () => {
	return (dispatch) => {
		let userLocation;
		dispatch(fetchDataPending());
		axios
			.get('http://ip-api.com/json')
			.then(({ data }) => {
				userLocation = data.country;
				return covidAPI.get('summary');
			})
			.then(({ data }) => {
				const result = {
					global: data['Global'],
					userLoc: userLocation
						? data['Countries'].find((entry) => entry.Country === userLocation)
						: undefined,
				};
				dispatch(fetchDataSuccess(result));
				return result;
			})
			.catch((err) => dispatch(fetchDataError(err)));
	};
};

export const postUserRegistartionData = (data) => {
	console.log(data);
	return (dispatch) => {
		let userLocation;
		dispatch(fetchDataPending());
		axios
			.get('http://ip-api.com/json')
			.then(({ data }) => {
				userLocation = data.country;
				return covidAPI.get('summary');
			})
			.then(({ data }) => {
				const result = {
					global: data['Global'],
					userLoc: userLocation
						? data['Countries'].find((entry) => entry.Country === userLocation)
						: undefined,
				};
				dispatch(fetchDataSuccess(result));
				return result;
			})
			.catch((err) => dispatch(fetchDataError(err)));
	};
};

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const removeCurrentUser = () => ({
	type: UserActionTypes.REMOVE_CURRENT_USER,
});
