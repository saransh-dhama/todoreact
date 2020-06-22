import React, { useState } from 'react';
import CheckSvg from '../../../assets/svg/check';
import { DeleteIcon, TaskDiv, EachList } from './itemElementStyles';

const Item = ({ task, isChecked, id, onCheck, deleteTask }) => {
	const [itemChecked] = useState(isChecked ? true : false);
	return (
		<TaskDiv>
			<EachList checked={itemChecked}>
				<input
					type='checkbox'
					id={id}
					className='input'
					value={itemChecked}
					onChange={() => onCheck(task)}
				/>
				<label htmlFor={id}>
					<CheckSvg />
				</label>
				<span>{task.label}</span>
			</EachList>
			<DeleteIcon onClick={() => deleteTask(task)}>X</DeleteIcon>
		</TaskDiv>
	);
};

export default Item;
