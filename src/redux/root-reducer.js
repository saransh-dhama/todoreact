import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toDoReducer from './toDo/toDo.reducer';
const INITIAL_APP_STATE = {
	theme: 'dark',
};

const AppReducer = (state = INITIAL_APP_STATE, action) => {
	switch (action.type) {
		case 'SET_APP_THEME':
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['app'],
};

const rootReducer = combineReducers({
	app: AppReducer,
	toDo: toDoReducer,
});

export default persistReducer(persistConfig, rootReducer);
