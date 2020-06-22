export const selectCurrentUser = (state) => state.user.data;
export const isUserLogged = (state) => state.user.isUserLogged;
export const getDataPending = (state) => state.user.pending;
export const getDataError = (state) => state.user.error;
