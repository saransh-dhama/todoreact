import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../utils/router.jsx';

import styled, { createGlobalStyle } from 'styled-components';
import Navigation from '../../components/navigation';
import Error from '../../components/errorBar';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isUserLogged } from '../../redux/user/user.selectors';
import {
	selectCurrentTheme,
	selectCurrentError,
} from '../../redux/app.selector';
import { setUserThemeMode, clearError } from '../../redux/app.action';
import { removeCurrentUser } from '../../redux/user/user.actions';
const GlobalStyle = createGlobalStyle`
	body {
    color: ${(props) => props.theme.color};
	}
`;
const Main = styled.main`
	padding-top: 60px;
`;

const Layout = ({
	isUserLogged,
	currentTheme,
	setSwitchedTheme,
	removeCurrentUser,
	pageError,
	clearError,
}) => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Navigation
					isUserLogged={isUserLogged}
					currentTheme={currentTheme}
					setSwitchedTheme={setSwitchedTheme}
					removeCurrentUser={removeCurrentUser}
				/>
				<Error error={pageError} clearError={clearError} />
				<Main id='page-content-wrapper' role='main'>
					<Routes />
				</Main>
			</BrowserRouter>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	currentTheme: selectCurrentTheme,
	isUserLogged: isUserLogged,
	pageError: selectCurrentError,
});
const mapDispatchToProps = (dispatch) => ({
	setSwitchedTheme: (mode) => dispatch(setUserThemeMode(mode)),
	removeCurrentUser: () => dispatch(removeCurrentUser()),
	clearError: () => dispatch(clearError()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
