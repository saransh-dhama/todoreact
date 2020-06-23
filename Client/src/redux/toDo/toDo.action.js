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

const getTasksApi = async (jwt) => {
	try {
		const tasks = await api.get('/todo', {
			headers: { Authorization: `Bearer ${jwt}` },
		});
		return tasks;
	} catch (err) {
		throw err;
	}
};

const getAllTasksForUser = (data) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		getTasksApi(getState().user.data.jwt)
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(todoFetchList(data));
				return data;
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};

export const addNewTaskForUser = (task) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.post('/todo', task, {
				headers: { Authorization: `Bearer ${getState().user.data.jwt}` },
			})
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(addNewTask(data));
				return data;
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};
export const updateTask = (task) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.put(`/todo/${task.taskId}`, task, {
				headers: { Authorization: `Bearer ${getState().user.data.jwt}` },
			})
			.then(() => {
				return getTasksApi(getState().user.data.jwt);
			})
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(todoFetchList(data));
				return data;
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};
export const deleteTask = (task) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.delete(`/todo/${task.taskId}`, {
				headers: { Authorization: `Bearer ${getState().user.data.jwt}` },
			})
			.then(() => {
				return getTasksApi(getState().user.data.jwt);
			})
			.then(({ data }) => {
				dispatch(clearError());
				dispatch(todoFetchList(data));
				return data;
			})
			.catch((err) => {
				dispatch(apiError(err.response));
				return err;
			});
	};
};
export const setTasksLists = (list) => {
	return {
		type: ToDoActionTypes.SET_TASK_LIST,
		payload: list,
	};
};

export { getAllTasksForUser };
