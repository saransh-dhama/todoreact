import { ToDoActionTypes } from './toDo.types';

export const setTasksLists = (list) => {
	return {
		type: ToDoActionTypes.SET_TASK_LIST,
		payload: list,
	};
};
