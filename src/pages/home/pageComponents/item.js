import React, { useState } from 'react';
import styled from 'styled-components';
import CheckSvg from '../../../assets/svg/check';
const uncheckedSvg = `
    #tick{
        display: none;
    }
`;
const checkedSvg = `
    #tick{
        display: block;
    }
`;
const checked = `
    text-decoration: line-through;
`;
const EachList = styled.div`
	font-size: 1rem;
	border-bottom: 2px solid ${(props) => props.theme.background};
	padding: 6px 15px;
	background: ${(props) => props.theme.elevated};
	${(props) => props.checked && `opacity: 0.2;`}
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
		line-height: 1.2;
		transition: color 0.4s;
		position: relative;
		font-size: 1.4em;
		${(props) => props.checked && checked}
		svg {
			width: 25px;
			height: 25px;
			position: absolute;
			left: 4px;
			top: 3px;
			path {
				fill: ${(props) => props.theme.color};
			}
			#tick {
				fill: ${(props) => props.theme.primaryColor};
			}
			${(props) => (props.checked ? checkedSvg : uncheckedSvg)}
		}
	}
`;

const Item = ({ task, isChecked, id }) => {
	const [itemChecked, setItemChecked] = useState(isChecked ? true : false);
	const toggleCheck = () => {
		setItemChecked(!itemChecked);
	};
	return (
		<EachList checked={itemChecked}>
			<input
				type='checkbox'
				id={id}
				className='input'
				value={itemChecked}
				onChange={toggleCheck}
			/>
			<label htmlFor={id}>
				<CheckSvg />
				{task.label}
			</label>
		</EachList>
	);
};

export default Item;
