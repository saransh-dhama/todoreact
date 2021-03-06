import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toDoReducer from './toDo/toDo.reducer';
import user from './user/user.reducer';
const INITIAL_APP_STATE = {
	theme: 'dark',
	pageError: null,
};

const AppReducer = (state = INITIAL_APP_STATE, action) => {
	switch (action.type) {
		case 'SET_APP_THEME':
			return {
				...state,
				theme: action.payload,
			};
		case 'ERROR_ON_PAGE':
			return {
				...state,
				pageError: action.payload,
			};
		case 'CLEAR_ERROR':
			return {
				...state,
				pageError: null,
			};
		default:
			return state;
	}
};
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['app', 'toDo', 'user'],
};

const rootReducer = combineReducers({
	app: AppReducer,
	toDo: toDoReducer,
	user: user,
});

export default persistReducer(persistConfig, rootReducer);
