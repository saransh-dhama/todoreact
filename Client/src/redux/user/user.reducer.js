import { UserActionTypes } from './user.types';

const INITIAL_USER_STATE = {
	data: null,
	isUserLogged: false,
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
		default:
			return state;
	}
};

export default userReducer;
