import { ToDoActionTypes } from './toDo.types';
import api from '../../axios/config';
export const toApiPending = () => {
	return {
		type: ToDoActionTypes.TODO_API_PENDING,
	};
};
export const todoFetchList = (data) => {
	return {
		type: ToDoActionTypes.TODO_FETCH_LIST,
		payload: data,
	};
};
export const addNewTask = (data) => {
	return {
		type: ToDoActionTypes.ADD_NEW_TASK,
		payload: data,
	};
};
export const apiError = (error) => {
	return {
		type: 'ERROR_ON_PAGE',
		payload: error,
	};
};
export const clearError = () => ({
	type: 'CLEAR_ERROR',
});

export const getAllTasksForUser = (data) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.get('/todo', {
				headers: { Authorization: `Bearer ${getState().user.data.jwt}` },
			})
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(todoFetchList(data));
				return data;
			})
			.catch((err) => dispatch(apiError(err)));
	};
};
export const addNewTaskForUser = (data) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.post('/todo', data, {
				headers: { Authorization: `Bearer ${getState().user.data.jwt}` },
			})
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(addNewTask(data));
				return data;
			})
			.catch((err) => dispatch(apiError(err)));
	};
};
export const setTasksLists = (list) => {
	return {
		type: ToDoActionTypes.SET_TASK_LIST,
		payload: list,
	};
};
