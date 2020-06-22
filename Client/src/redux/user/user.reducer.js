import { UserActionTypes } from './user.types';

const INITIAL_USER_STATE = {
	data: null,
	isUserLogged: false,
	pending: false,
	error: null,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				data: action.payload,
				isUserLogged: true,
			};
		case UserActionTypes.REMOVE_CURRENT_USER:
			return {
				...state,
				data: '',
				isUserLogged: false,
			};
		case UserActionTypes.USER_API_ACTION_PENDING:
			return {
				...state,
				pending: true,
			};
		case UserActionTypes.USER_SIGNIN:
			return {
				...state,
				pending: false,
				data: action.payload,
				isUserLogged: true,
			};
		case UserActionTypes.ERROR_IN_API:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default userReducer;
