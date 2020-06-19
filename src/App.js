import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Layout from './hoc/Layout/layout.jsx';
import { Constants, ConstantsLight } from './utils/theme/themeConstants';
import { selectCurrentTheme } from './redux/app.selector.js';

const App = ({ selectedThemeMode }) => {
	const theme = selectedThemeMode === 'dark' ? Constants : ConstantsLight;
	return (
		<ThemeProvider theme={theme}>
			<Layout />
		</ThemeProvider>
	);
};
const mapStateToProps = createStructuredSelector({
	selectedThemeMode: selectCurrentTheme,
});

export default connect(mapStateToProps, null)(App);
