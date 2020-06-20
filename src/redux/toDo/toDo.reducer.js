import { ToDoActionTypes } from './toDo.types';

const INITIAL_MAKE_STATE = {
	list: null,
	done: null,
};

const makeReducer = (state = INITIAL_MAKE_STATE, action) => {
	switch (action.type) {
		case ToDoActionTypes.SET_TASK_LIST:
			return {
				...state,
				list: action.payload.toDo,
				done: action.payload.done,
			};
		default:
			return state;
	}
};

export default makeReducer;
