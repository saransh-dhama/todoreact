import { ToDoActionTypes } from './toDo.types';
import api from '../../axios/config';
export const toApiPending = () => {
	return {
		type: ToDoActionTypes.TODO_API_PENDING,
	};
};
export const todoFetchList = (data) => {
	console.log(data);
	return {
		type: ToDoActionTypes.TODO_FETCH_LIST,
		payload: data,
	};
};
export const fetchDataError = (error) => {
	return {
		type: ToDoActionTypes.FETCH_DATA_ERROR,
		error: error,
	};
};

export const postUserRegistartionData = (data) => {
	return (dispatch, getState) => {
		dispatch(toApiPending());
		api
			.post(
				'/todo',
				{
					task: 'example@test.com',
				},
				{ headers: { Authorization: `Bearer ${getState().user.data.jwt}` } }
			)
			.then(({ data }) => {
				dispatch(
					todoFetchList([
						{
							label: 'adasd asdasd ad asd',
							id: '1592863774696',
							status: 'active',
						},
					])
				);
				return data;
			})
			.catch((err) => dispatch(fetchDataError(err)));
	};
};
export const setTasksLists = (list) => {
	return {
		type: ToDoActionTypes.SET_TASK_LIST,
		payload: list,
	};
};
