import { ToDoActionTypes } from './toDo.types';

const INITIAL_MAKE_STATE = {
	tasks: [],
};

const makeReducer = (state = INITIAL_MAKE_STATE, action) => {
	switch (action.type) {
		case ToDoActionTypes.SET_TASK_LIST:
			return {
				...state,
				tasks: action.payload.tasks,
			};
		default:
			return state;
	}
};

export default makeReducer;
