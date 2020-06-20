import React, { useState } from 'react';
import styled from 'styled-components';
import CheckSvg from '../../../assets/svg/check';

const checked = `
	text-decoration: line-through;
	opacity: 0.4;
`;
const EachList = styled.div`
	font-size: 1rem;
	border-bottom: 2px solid ${(props) => props.theme.background};
	padding: 6px 15px;
	background: ${(props) => props.theme.elevated};
	display: flex;
	align-items: center;
	&:hover {
		label {
			svg {
				#tick {
					display: block;
				}
			}
		}
	}
	input {
		text-align: center;
		width: 25px;
		height: 25px;
		position: absolute;
		border: none; /* Mobile Safari */
		-webkit-appearance: none;
		appearance: none;
		opacity: 0;
	}
	label {
		word-break: break-all;
		padding: 9px 0px 9px 50px;
		display: block;
		transition: color 0.4s;
		position: relative;
		cursor: pointer;
		height: 32px;
		width: 30px;
		${(props) => props.checked && checked}
		svg {
			width: 25px;
			height: 25px;
			position: absolute;
			left: 4px;
			top: 3px;
			path {
				${(props) =>
					props.checked
						? `fill: ${props.theme.primaryColor};`
						: `fill: ${props.theme.color};`}
			}
			#tick {
				fill: ${(props) => props.theme.primaryColor};
				${(props) => (props.checked ? `display: block;` : `display: none;`)}
			}
		}
	}
	span {
		line-height: 1.2;
		font-size: 1.4em;
		${(props) => props.checked && checked}
	}
`;

const Item = ({ task, isChecked, id, onCheck }) => {
	const [itemChecked] = useState(isChecked ? true : false);
	return (
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
	);
};

export default Item;
