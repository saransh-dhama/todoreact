import { createSelector } from 'reselect';

const selectTasksState = (state) => state.toDo;

export const selectTasks = createSelector(
	[selectTasksState],
	(state) => state.tasks
);
