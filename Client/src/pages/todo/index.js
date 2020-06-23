import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Item from './pageComponents/item';
import {
	HomePage,
	Container,
	InputDiv,
	ListsContainerDiv,
	ListDiv,
	EmptyListMessage,
	ListCount,
} from './elementStyles';
import { selectTasks } from '../../redux/toDo/toDo.selector';
import { isUserLogged } from '../../redux/user/user.selectors';
import {
	getAllTasksForUser,
	addNewTaskForUser,
	updateTask,
	deleteTask,
} from '../../redux/toDo/toDo.action';

const ToDoPageComponent = ({
	isUserLogged,
	fetchTasksFromServer,
	tasksList,
	addNewTask,
	updateTask,
	deleteTask,
}) => {
	useEffect(() => {
		if (isUserLogged) {
			fetchTasksFromServer();
		}
	}, [isUserLogged, fetchTasksFromServer]);
	if (!isUserLogged) {
		return <Redirect to='/' />;
	}
	const toDoList = tasksList.filter((task) => task.status === 'active');
	const doneTaskList = tasksList.filter((task) => task.status === 'done');
	const addTasks = (event) => {
		if (!event.target.value) return;
		event.persist();
		if (event.key === 'Enter') {
			event.preventDefault();
			const task = {
				task: event.target.value,
			};
			addNewTask(task);
		}
	};
	const update = (taskUpdated) => {
		taskUpdated.status = taskUpdated.status === 'active' ? `done` : `active`;
		updateTask(taskUpdated);
	};
	return (
		<HomePage>
			<Container className='container'>
				<InputDiv>
					<input
						type='text'
						placeholder='Add to-do tasks. What needs to done?'
						onKeyUp={addTasks}
					/>
				</InputDiv>
				<ListsContainerDiv>
					<ListDiv>
						<h2>To-Do Activities</h2>
						{toDoList.length ? (
							toDoList.map((task) => {
								return (
									<Item
										task={task}
										key={task.taskId}
										id={task.taskId}
										isChecked={task.status === 'active' ? false : true}
										onCheck={update}
										deleteTask={() => deleteTask(task)}
									/>
								);
							})
						) : (
							<EmptyListMessage>No tasks available.</EmptyListMessage>
						)}
						{toDoList.length ? (
							<ListCount>{`${toDoList.length} items left`}</ListCount>
						) : null}
					</ListDiv>
					<ListDiv>
						<h2>Tasks completed</h2>
						{doneTaskList.length ? (
							doneTaskList.map((task) => {
								return (
									<Item
										task={task}
										key={task.taskId}
										id={task.taskId}
										isChecked={task.status === 'done' ? true : false}
										onCheck={update}
										deleteTask={() => deleteTask(task)}
									/>
								);
							})
						) : (
							<EmptyListMessage>Done tasks list is empty</EmptyListMessage>
						)}
					</ListDiv>
				</ListsContainerDiv>
			</Container>
		</HomePage>
	);
};

const mapStateToProps = createStructuredSelector({
	tasksList: selectTasks,
	isUserLogged: isUserLogged,
});
const mapDispatchToProps = (dispatch) => ({
	addNewTask: (task) => dispatch(addNewTaskForUser(task)),
	fetchTasksFromServer: () => dispatch(getAllTasksForUser()),
	updateTask: (task) => dispatch(updateTask(task)),
	deleteTask: (task) => dispatch(deleteTask(task)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPageComponent);
