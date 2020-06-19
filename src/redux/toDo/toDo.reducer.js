import { ToDoActionTypes } from './toDo.types';

const INITIAL_MAKE_STATE = {
	list: null,
};

const makeReducer = (state = INITIAL_MAKE_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default makeReducer;
