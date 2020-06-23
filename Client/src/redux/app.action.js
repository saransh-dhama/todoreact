export const setUserThemeMode = (mode) => ({
	type: 'SET_APP_THEME',
	payload: mode,
});

export const errorOnPage = (error) => ({
	type: 'ERROR_ON_PAGE',
	payload: error,
});
export const clearError = () => ({
	type: 'CLEAR_ERROR',
});
