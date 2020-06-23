import React from 'react';

import styled from 'styled-components';
import DesktopNavigation from './desktopNav';

const Header = styled.header`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 60px;
	font-size: 1rem;
	background: ${(props) => props.theme.primaryColor};
	display: flex;
`;
const Navigation = ({
	isUserLogged,
	currentTheme,
	setSwitchedTheme,
	removeCurrentUser,
}) => {
	const signOut = () => {
		removeCurrentUser();
	};
	const onChangeHandler = () => {
		currentTheme === 'dark'
			? setSwitchedTheme('light')
			: setSwitchedTheme('dark');
	};
	return (
		<Header id='header'>
			<DesktopNavigation
				theme={currentTheme}
				switchTheme={onChangeHandler}
				isUserLogged={isUserLogged}
				signOut={signOut}
			/>
		</Header>
	);
};

export default Navigation;
