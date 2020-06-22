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
		case UserActionTypes.FETCH_DATA_PENDING:
			return {
				...state,
				pending: true,
			};
		case UserActionTypes.FETCH_DATA_SUCCESS:
			return {
				...state,
				pending: false,
				data: action.payload,
				isUserLogged: true,
			};
		case UserActionTypes.FETCH_DATA_ERROR:
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
