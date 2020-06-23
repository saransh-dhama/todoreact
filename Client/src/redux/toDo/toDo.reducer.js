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
		case ToDoActionTypes.TODO_FETCH_LIST:
			return {
				...state,
				tasks: action.payload.todos,
			};
		case ToDoActionTypes.ADD_NEW_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload.task],
			};
		default:
			return state;
	}
};

export default makeReducer;
