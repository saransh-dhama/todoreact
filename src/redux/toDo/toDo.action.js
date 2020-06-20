import { ToDoActionTypes } from './toDo.types';

export const setAllMakes = (list) => {
	return {
		type: ToDoActionTypes.SET_TASK_LIST,
		payload: list,
	};
};
