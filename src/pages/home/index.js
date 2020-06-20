import React from 'react';
import Item from './pageComponents/item';
import {
	HomePage,
	Container,
	InputDiv,
	ListsContainerDiv,
	ListDiv,
} from './elementStyles';
// import {} from '../../redux/toDo/toDo.selector';
// import {} from '../../redux/toDo/toDo.action';

const HomePageComponent = () => {
	const [listOfTasks, setTasks] = React.useState([]);
	const addTasks = (event) => {
		if (!event.target.value) return;
		event.persist();
		if (event.key === 'Enter') {
			event.preventDefault();
			const task = {
				label: event.target.value,
				time: new Date().getTime(),
			};
			setTasks([task, ...listOfTasks]);
		}
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
						{listOfTasks.map((task) => {
							return (
								<Item
									task={task}
									key={task.time}
									id={task.time}
									isChecked={false}
								/>
							);
						})}
					</ListDiv>
					<ListDiv>
						{/* <h2>Done Activities</h2>
						<Item />
						<Item />
						<Item />
						<Item /> */}
					</ListDiv>
				</ListsContainerDiv>
			</Container>
		</HomePage>
	);
};

export default HomePageComponent;
