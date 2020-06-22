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
		type: UserActionTypes.ERROR_IN_API,
		error: error,
	};
};

export const userSignUpFunction = (data) => {
	return (dispatch) => {
		dispatch(userApiActionPending());
		api
			.post('/user/signup', data)
			.then(({ data }) => {
				dispatch(userSignIn(data));
				return data;
			})
			.catch((err) => dispatch(apiError(err)));
	};
};
export const userSignInFunction = () => {
	return (dispatch, getState) => {
		dispatch(userApiActionPending());
		api
			.post('/user/signin', {
				email: 'example@test.com',
				password: 'simbatest',
			})
			.then(({ data }) => {
				dispatch(userSignIn(data));
				return data;
			})
			.catch((err) => dispatch(apiError(err)));
	};
};

export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const removeCurrentUser = () => ({
	type: UserActionTypes.REMOVE_CURRENT_USER,
});
