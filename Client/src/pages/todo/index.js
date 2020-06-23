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
	setTasksLists,
	getAllTasksForUser,
} from '../../redux/toDo/toDo.action';

const ToDoPageComponent = ({
	isUserLogged,
	getTasks,
	tasksList,
	setTasksLists,
}) => {
	useEffect(() => {
		if (isUserLogged) {
			getTasks();
		}
	}, [isUserLogged, getTasks]);
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
				label: event.target.value,
				id: new Date().getTime(),
				status: 'active',
			};
			setTasksLists({
				tasks: [...tasksList, task],
			});
		}
	};
	const updateTask = (taskUpdated) => {
		const index = tasksList.findIndex((task) => task.id === taskUpdated.id);
		tasksList[index].status =
			taskUpdated.status === 'active' ? `done` : `active`;
		setTasksLists({
			tasks: [...tasksList],
		});
	};
	const deleteTask = (taskUpdated) => {
		const tempList = tasksList.filter((task) => task.id !== taskUpdated.id);
		setTasksLists({
			tasks: [...tempList],
		});
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
										onCheck={updateTask}
										deleteTask={deleteTask}
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
										key={task.id}
										id={task.id}
										isChecked={task.status === 'done' ? true : false}
										onCheck={updateTask}
										deleteTask={deleteTask}
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
	setTasksLists: (list) => dispatch(setTasksLists(list)),
	getTasks: () => dispatch(getAllTasksForUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPageComponent);
