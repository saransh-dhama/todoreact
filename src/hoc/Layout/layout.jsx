import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../utils/router.jsx';

import styled, { createGlobalStyle } from 'styled-components';
import Navigation from '../../components/navigation';
const GlobalStyle = createGlobalStyle`
	body {
    color: ${(props) => props.theme.color};
	}
`;
const Main = styled.main`
	padding-top: 60px;
`;

const Layout = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Navigation />
				<Main id='page-content-wrapper' role='main'>
					<Routes />
				</Main>
			</BrowserRouter>
		</>
	);
};

export default Layout;
