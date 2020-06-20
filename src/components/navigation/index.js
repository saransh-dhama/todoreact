import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DesktopNavigation from './desktopNav';
import { selectCurrentTheme } from '../../redux/app.selector';
import { setUserThemeMode } from '../../redux/app.action';
const Header = styled.header`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 60px;
	font-size: 1rem;
	background: ${(props) => props.theme.primaryColor};
	display: flex;
`;
const Navigation = ({ currentTheme, setSwitchedTheme }) => {
	const onChangeHandler = () => {
		currentTheme === 'dark'
			? setSwitchedTheme('light')
			: setSwitchedTheme('dark');
	};
	return (
		<Header id='header'>
			<DesktopNavigation theme={currentTheme} switchTheme={onChangeHandler} />
		</Header>
	);
};

const mapStateToProps = createStructuredSelector({
	currentTheme: selectCurrentTheme,
});

const mapDispatchToProps = (dispatch) => {
	return {
		setSwitchedTheme: (mode) => dispatch(setUserThemeMode(mode)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
