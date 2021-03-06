import styled from 'styled-components';
const checked = `
	text-decoration: line-through;
	opacity: 0.5;
`;
export const DeleteIcon = styled.span`
	color: ${(props) => props.theme.background};
	font-size: 1.4em !important;
	font-weight: ${(props) => props.theme.fontBold};
	color: #2f2f31;
	cursor: pointer;
	right: 0px;
	position: absolute;
	top: 0px;
	padding: 12px 15px;
	display: none;
`;
export const TaskDiv = styled.div`
	position: relative;
	&:hover ${DeleteIcon} {
		display: block;
	}
`;
export const EachList = styled.div`
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
						? `fill: ${props.theme.secondaryColor};`
						: `fill: ${props.theme.color};`}
			}
			#tick {
				fill: ${(props) => props.theme.secondaryColor};
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
