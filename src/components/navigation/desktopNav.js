import React from 'react';
import styled from 'styled-components';

const NavigationBarDesktop = styled.nav`
	padding: 8px 15px;
`;
const LinkList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr repeat(1, 250px);
	grid-gap: 20px;
	li {
		list-style: none;
		font-size: 1.6rem;
	}
`;
const LogoBlock = styled.li`
	grid-column: 1 / 2;
	justify-self: start;
	font-weight: ${(props) => props.theme.fontBold};
`;
const ToggleSwitch = styled.li`
	display: flex;
	justify-content: start;
	align-items: center;
	input {
		display: none;
		&,
		&:after,
		&:before,
		& *,
		& *:after,
		& *:before,
		& label {
			box-sizing: border-box;
			&::selection {
				background: none;
			}
		}

		+ label {
			outline: 0;
			margin-left: 15px;
			width: 3em;
			height: 1em;
			position: relative;
			cursor: pointer;
			user-select: none;
			&:after,
			&:before {
				position: relative;
				display: block;
				content: '';
				width: 50%;
				height: 100%;
			}

			&:after {
				left: 0;
			}

			&:before {
				display: none;
			}
			padding: 2px;
			transition: all 0.2s ease;
			border: 2px solid ${(props) => props.theme.colorInvert};
			border-radius: 2em;
			&:after {
				transition: all 0.2s ease;
				background: ${(props) => props.theme.colorInvert};
				content: '';
				border-radius: 1em;
			}
		}

		&:checked + label {
			border: 2px solid ${(props) => props.theme.colorInvert};
			&:after {
				left: 50%;
				background: ${(props) => props.theme.colorInvert};
			}
		}
	}
`;
const DesktopNavigation = ({ theme, switchTheme }) => {
	return (
		<NavigationBarDesktop>
			<LinkList>
				<LogoBlock>
					<a href='/'>To-DO</a>
				</LogoBlock>
				<ToggleSwitch>
					<span>Switch Theme</span>
					<input
						type='checkbox'
						id='theme_switch'
						checked={theme !== 'dark'}
						onChange={switchTheme}
					/>
					<label htmlFor='theme_switch'></label>
				</ToggleSwitch>
			</LinkList>
		</NavigationBarDesktop>
	);
};

export default DesktopNavigation;
