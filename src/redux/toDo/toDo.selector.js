import { createSelector } from 'reselect';

const selectTasksState = (state) => state.toDO;

export const selectToDoTask = createSelector(
	[selectTasksState],
	(state) => state.toDo
);
