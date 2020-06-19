import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './hoc/Layout/layout.jsx';
import Constants from './utils/theme/themeConstants';
const App = ({ selectedThemeMode }) => {
	return (
		<ThemeProvider theme={Constants}>
			<Layout />
		</ThemeProvider>
	);
};

export default App;
