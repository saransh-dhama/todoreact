import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DesktopNavigation from './desktopNav';
import { isUserLogged } from '../../redux/user/user.selectors';
import { selectCurrentTheme } from '../../redux/app.selector';
import { setUserThemeMode } from '../../redux/app.action';
import { removeCurrentUser } from '../../redux/user/user.actions';

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

const mapStateToProps = createStructuredSelector({
	currentTheme: selectCurrentTheme,
	isUserLogged: isUserLogged,
});
const mapDispatchToProps = (dispatch) => ({
	setSwitchedTheme: (mode) => dispatch(setUserThemeMode(mode)),
	removeCurrentUser: () => dispatch(removeCurrentUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
