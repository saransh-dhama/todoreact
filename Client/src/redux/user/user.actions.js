import { UserActionTypes } from './user.types';
import api from '../../axios/config';

export const userApiActionPending = () => {
	return {
		type: UserActionTypes.USER_API_ACTION_PENDING,
	};
};
export const userSignIn = (data) => {
	return {
		type: UserActionTypes.USER_SIGNIN,
		payload: data,
	};
};
export const apiError = (error) => {
	return {
		type: 'ERROR_ON_PAGE',
		payload: error,
	};
};
export const clearError = () => ({
	type: 'CLEAR_ERROR',
});

export const userSignUpFunction = (data) => {
	return (dispatch) => {
		dispatch(userApiActionPending());
		api
			.post('/user/signup', data)
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(userSignIn(data));
				return data;
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};
export const userSignInFunction = (data) => {
	return (dispatch, getState) => {
		dispatch(userApiActionPending());
		api
			.post('/user/signin', data)
			.then(({ data, status, statusText }) => {
				dispatch(clearError());
				dispatch(userSignIn(data));
				return { data, status, statusText };
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const removeCurrentUser = () => ({
	type: UserActionTypes.REMOVE_CURRENT_USER,
});
